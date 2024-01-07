/// <reference types="node" />
// https://vitepress.dev/guide/data-loading
import fs from "node:fs/promises"

import {glob} from "glob"
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

// https://stackoverflow.com/questions/9781218/how-to-change-node-jss-console-font-color
const colors = {
  Reset: "\x1b[0m",
  FgRed: "\x1b[31m",
  FgGreen: "\x1b[32m",
};

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

  const total = Object.values(srcData).map(l => l.length).reduce((c, a) => c + a, 0)
  const okSign = `${colors.FgGreen}✓${colors.Reset}`
  const errorSign = `${colors.FgRed}𐄂${colors.Reset}`
  var currentItem = 0

  async function handleItem(item: PlainItem) {
    const wrap = (p: Promise<any>, sourceName: string) => {
      return p.then((r) => {
        console.info(` ${sourceName} ${okSign}`)
        return r
      }).catch((err) => {
        console.error(` ${sourceName} ${errorSign}: ${err}`)
        return undefined
      })
    }
    currentItem++

    console.log(`[${currentItem}/${total}] ${item.name}…`)

    const [github, npmjs] = await Promise.all([
      wrap(fetchGithubData(item), 'github'),
      wrap(fetchNpmjsData(item), 'npmjs'),
    ])


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
  const url = `https://registry.npmjs.org/${name}`
  const {time, error}: {
    time?: Record<string, string>,
    error?: string
  } = await fetchJson(url);
  if (error) {
    throw new Error(error)
  }
  const releases = Object.entries(time);
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
