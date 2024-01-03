const items = [
  {
    name: "vue-cheetah-grid",
    url: "https://github.com/future-architect/cheetah-grid",
    description: "A high-performance grid engine that work on a canvas for Vue.js.",
  },
]

export default {
  async load() {

    const enrichedItems = await Promise.all(items.map(async item => {
      const name = item.url.slice(19)
      const ghUrl = `https://api.github.com/search/repositories?q=@${name}`
      const resp = await fetch(ghUrl)
      const data = (await resp.json()).items[0]
      return {
        ...item,
        repoInfo: data,
        stars: data.stargazers_count,
        pushed_at: data.pushed_at,
      };
    }))

    return {items: enrichedItems}
  }
}
