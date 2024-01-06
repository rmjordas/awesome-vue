/// <reference types="node" />
// https://vitepress.dev/guide/data-loading
import fs from "node:fs/promises"

/**
 * Fetch additional data for repositories.
 */
export const awesomeItemsLoader = (fname: string) => ({
  async load() {
    const src = await fs.readFile(fname.replace(/.data.js$/, '.data-rich.json'), {encoding: 'utf-8'})
    return JSON.parse(src)
  },
});
