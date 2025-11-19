export interface PlainItem {
  name: string
  /**
   * If npm package name is different from `name`, use `npmName`.
   * */
  npmName?: string
  url: string
  description: string
}

export interface RichItem extends PlainItem {
  github?: {
    stars: number
    pushedAt: string
  },
  npmjs?: {
    lastRelease: string
    lastReleaseAt: string
  }
}

export interface JsonDataFile {
  [key: string]: PlainItem[]
}
