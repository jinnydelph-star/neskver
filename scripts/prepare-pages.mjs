import { readdir, readFile, writeFile } from 'node:fs/promises'
import { join } from 'node:path'

// Existing artwork and font URLs are rooted at /. GitHub Pages uses /neskver/.
async function prepare(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name)
    if (entry.isDirectory()) await prepare(path)
    else if (/\.(html|js|css)$/.test(entry.name)) {
      const source = await readFile(path, 'utf8')
      await writeFile(path, source.replace(/(?<!\/neskver)\/(assets|fonts)\//g, '/neskver/$1/'))
    }
  }
}
await prepare('dist')
