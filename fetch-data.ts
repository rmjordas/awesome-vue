/// <reference types="node" />
// https://vitepress.dev/guide/data-loading
import fs from "node:fs/promises"

import {glob} from "glob"
import ProgressBar from "progress"
import sqliteStore from "cache-manager-sqlite"
import cacheManager from "cache-manager"
import {Octokit} from "octokit"

import {PlainItem, JsonDataFile, RichItem} from "./content/.vitepress/types"

const octokit = new Octokit({ auth: process.env.GH_TOKEN })
const cache = cacheManager.caching({
  store: sqliteStore,
  name: "packages",
  path: "/tmp/cache.db",
  ttl: 864000 * 1000, // Ten days in milliseconds.
});

(async function main() {
  const inputFiles = await glob("content/*/*.data.json")
  for (const fname of inputFiles) {
    await handleFile(fname)
  }
})()

/**
 * Fetch additional data for repositories.
 */
const handleFile = async (fname: string) => {
  console.log(`Processing ${fname}…`)

  const src = await fs.readFile(fname, {encoding: 'utf-8'})
  const srcData: JsonDataFile = JSON.parse(src)

  const bar = new ProgressBar('[:bar] [:current/:total]', {
    total: Object.values(srcData).map(l => l.length).reduce((c, a) => c + a, 0),
    width: 40,
    // https://stackoverflow.com/questions/9781218/how-to-change-node-jss-console-font-color
    complete: '\x1b[32m━\x1b[0m',
    incomplete: '\x1b[90m━\x1b[0m',
  });

  async function handleItem(item: PlainItem) {
    const handleError = (err) => {
      console.error("Failed to load data for", item.name, err)
      return undefined
    }

    const [github, npmjs] = await Promise.all([
      fetchGithubData(item).catch(handleError),
      fetchNpmjsData(item).catch(handleError),
    ])

    bar.tick(1, undefined)

    return {
      ...item,
      github,
      npmjs,
    }
  }

  const richData: Record<string, RichItem[]> = {}

  // Not using parallel processing here to stay below api limits.
  for (const [key, items] of Object.entries(srcData)) {
    const richItems: RichItem[] = []
    for (const item of items) {
      richItems.push(await handleItem(item))
    }
    richData[key] = richItems
  }

  await fs.writeFile(
    fname,
    JSON.stringify(richData, null, 2) + "\n",
    {encoding: 'utf-8'},
  )
};

/**
 * Fetch package data from Github search API
 *
 * For authenticated requests, you can make up to 30 requests per minute.
 * Retries are handled by Octokit automatically.
 *
 * https://docs.github.com/en/rest/search/search?apiVersion=2022-11-28
 */
async function fetchGithubData(item: PlainItem) {
  if (!item.url.startsWith('https://github.com/')) {
    console.log("Skip non-github url.")
    return undefined
  }
  const name = item.url.slice(19);
  const query = `@${name}`;


  const {data: {items}} = await searchGithub(query).catch(error => {
    return {data: {}}
  })

  if (!items?.length) {
    throw new Error(`Repo ${name} not found.`)
  }

  const data: {
    stargazers_count: number;
    pushed_at: string;
  } = items[0];
  return {
    stars: data.stargazers_count,
    pushedAt: data.pushed_at,
  };
}

/**
 * Fetch package data from npm registry
 *
 * API limits - Unknown
 * https://github.com/npm/registry/blob/master/docs/REGISTRY-API.md
 */
async function fetchNpmjsData(item: PlainItem) {
  const name = item.npmName || item.name
  const url = `https://registry.npmjs.org/${name}`;
  const data: {
    time: Record<string, string>;
  } = await fetchJson(url);
  const releases = Object.entries(data.time);
  const [lastRelease, lastReleaseAt] = releases[releases.length - 1];
  return {
    lastRelease,
    lastReleaseAt,
  };
}

function searchGithub(q: string) {
  return new Promise<any>((resolve, reject) => {
    cache.wrap(
      q,
      (cb) =>
        octokit.rest.search.repos({q})
          .then((r) => cb(null, r))
          .catch((err) => cb(err)),
      {},
      (err, res) => {
        if (err) reject(err);
        else resolve(res);
      },
    );
  });
}

function fetchJson(url: string | URL | Request, init?: RequestInit) {
  // cache-manager v4 uses this awful syntax, but it works!
  // we're using v4, because cache-manager-sqlite still not updated for v5
  // After this is done, we can update and switch to async/await.
  // https://github.com/maxpert/node-cache-manager-sqlite/issues/4
  return new Promise<any>((resolve, reject) => {
    cache.wrap(
      url,
      (cb) =>
        _fetchJson(url, init)
          .then((r) => cb(null, r))
          .catch((err) => cb(err)),
      {},
      (err, res) => {
        if (err) reject(err);
        else resolve(res);
      },
    );
  });
}

async function _fetchJson(url: string | URL | Request, init?: RequestInit) {
  return await (await fetch(url, init)).json();
}
