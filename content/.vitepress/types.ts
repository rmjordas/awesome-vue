export interface PlainItem {
  name: string
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
