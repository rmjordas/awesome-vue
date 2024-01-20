/// <reference types="node" />
/**
 * This is the script for converting old .md files into new data-oriented scheme.
 *
 * It's intended to be used once, and removed after migration.
 *
 * https://vitepress.dev/guide/data-loading
 */
import fs from "node:fs/promises"
import {basename, dirname} from "node:path"

import {glob} from "glob"

(async function main() {
  const inputFiles = await glob("content/components-and-libraries/*.md")
  for (const fname of inputFiles) {
    await handleFile(fname)
  }
})()

const handleFile = async (fname: string) => {
  const dirName = dirname(fname)
  const baseName = basename(fname)
  const dataName = baseName.replace(/\.md$/, '.data.js')
  console.log(`Processing ${baseName}…`)

  const src = await fs.readFile(fname, {encoding: 'utf-8'})

  if (src.includes('ProjectList')) {
    console.log("Already converted.")
    return
  }

  const result: string[] = []

  const rawData: Record<string, Record<string, string>[]> = {}
  var currentHeader: string | null = null
  var inList = false
  var frontMatterMakers = 0
  const listItemRegex = /- \[(?<name>.+)\]\((?<url>.+)\) (-|–) (?<description>.+)/

  for (const line of src.split("\n")) {
    const listItem = line.match(listItemRegex)

    if (inList && !listItem) {
      result.push(`<ProjectList :items="data['${currentHeader}']" />`)
      inList = false
    }

    if (line.startsWith("#")) {
      if (!rawData[currentHeader]?.length) {
        delete rawData[currentHeader]
      }
      currentHeader = line.replace(/#/g, '').trim()
      rawData[currentHeader] = []
      result.push(line)
    } else if (listItem) {
      rawData[currentHeader].push(listItem.groups!)
      inList = true
    } else {
      result.push(line)
      if (line.trim() == '---') {
        frontMatterMakers++
        if (frontMatterMakers == 2) {
          result.push(`\n<script setup>\nimport {data} from "./${dataName}"\n</script>`)
        }
      }
    }
  }


  await fs.writeFile(
    `${dirName}/${dataName}`,
    `import {awesomeItemsLoader} from "../.vitepress/utils"

export default awesomeItemsLoader(__filename)
`,
    {encoding: 'utf-8'},
  )
  await fs.writeFile(
    fname,
    result.join("\n") + "\n",
    {encoding: 'utf-8'},
  )
  await fs.writeFile(
    fname.replace(/\.md$/, '.data.json'),
    JSON.stringify(rawData, null, 2) + '\n',
    {encoding: 'utf-8'},
  )
};
