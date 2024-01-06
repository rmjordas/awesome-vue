/// <reference types="node" />
// https://vitepress.dev/guide/data-loading
import fs from "node:fs/promises"
import {basename} from "path"
import sqliteStore from "cache-manager-sqlite"
import cacheManager from "cache-manager"

import {PlainItem, JsonDataFile} from "./types"

const cache = cacheManager.caching({
  store: sqliteStore,
  name: "packages",
  path: "/tmp/cache.db",
  ttl: 864000 * 1000, // Ten days in milliseconds.
});

/**
 * Fetch additional data for repositories.
 */
export const awesomeItemsLoader = (fname: string) => ({
  async load() {
    const src = await fs.readFile(fname.replace(/.js$/, '.json'), {encoding: 'utf-8'})
    const srcData: JsonDataFile = JSON.parse(src)
    const richItems = await Promise.all(Object.entries(srcData).map(async ([key, items]) => {
      return [key, await loadItems(items)]
    }))
    return Object.fromEntries(richItems)
  },
});

async function loadItems(items: PlainItem[]) {
  return Promise.all(
    items.map(async (item) => {

      const handleError = (err) => {
        console.error("Failed to load data for", item.name, err)
        return undefined
      }

      return {
        ...item,
        github: await fetchGithubData(item).catch(handleError),
        npmjs: await fetchNpmjsData(item).catch(handleError),
      };
    }),
  );
}

async function fetchGithubData(item: PlainItem) {
  const name = item.url.slice(19);
  const url = `https://api.github.com/search/repositories?q=@${name}`;

  const {items, ...r} = await fetchJson(url)

  if (!items?.length) {
    console.log(`Repo ${name} not found`, r)
    return undefined
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

function fetchJson(url: string) {
  // cache-manager v4 uses this awful syntax, but it works!
  // we're using v4, because cache-manager-sqlite still not updated for v5
  // After this is done, we can update and switch to async/await.
  // https://github.com/maxpert/node-cache-manager-sqlite/issues/4
  return new Promise<any>((resolve, reject) => {
    cache.wrap(
      url,
      (cb) =>
        _fetchJson(url)
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

async function _fetchJson(url: string) {
  return await (await fetch(url)).json();
}
