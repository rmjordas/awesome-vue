// https://vitepress.dev/guide/data-loading
import sqliteStore from "cache-manager-sqlite";
import cacheManager from "cache-manager";

const cache = cacheManager.caching({
  store: sqliteStore,
  // @ts-expect-error Argument for sqliteStore, not supported in ts.
  name: "packages",
  path: "/tmp/cache.db",
  ttl: 864000 * 1000, // Ten days in milliseconds.
});

interface PlainItem {
  name: string;
  url: string;
  description: string;
}

/**
 * Fetch additional data for repositories.
 */
export const awesomeItemsLoader = (items: PlainItem[]) => ({
  async load() {
    const enrichedItems = await Promise.all(
      items.map(async (item) => {
        return {
          ...item,
          github: await fetchGithubData(item),
          npmjs: await fetchNpmjsData(item),
        };
      }),
    );

    return { items: enrichedItems };
  },
});

async function fetchGithubData(item: PlainItem) {
  const name = item.url.slice(19);
  const url = `https://api.github.com/search/repositories?q=@${name}`;

  const data: {
    stargazers_count: number;
    pushed_at: string;
  } = (await fetchJson(url)).items[0];
  return {
    stars: data.stargazers_count,
    pushedAt: data.pushed_at,
  };
}

async function fetchNpmjsData(item: PlainItem) {
  const url = `https://registry.npmjs.org/${item.name}`;
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
      (cb) => _fetchJson(url).then((r) => cb(null, r)).catch(err => cb(err)),
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
