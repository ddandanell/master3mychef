import sharp from 'sharp'
import { glob } from 'glob'
import fs from 'fs/promises'
import path from 'path'

async function main() {
  const files = await glob('public/generated/mychef-bar-services-bali-*.{webp,jpg,jpeg}', {
    absolute: true,
  })

  if (files.length === 0) {
    console.log('No matching bar-services images found.')
    return
  }

  let totalBefore = 0
  let totalAfter = 0

  for (const file of files) {
    const ext = path.extname(file).toLowerCase()
    const tmp = `${file}.tmp${ext}`
    const pipeline = sharp(file).resize({ width: 1600, withoutEnlargement: true })

    if (ext === '.jpg' || ext === '.jpeg') {
      await pipeline.jpeg({ quality: 80, progressive: true }).toFile(tmp)
    } else {
      await pipeline.webp({ quality: 80, effort: 4 }).toFile(tmp)
    }

    const originalSize = (await fs.stat(file)).size
    const newSize = (await fs.stat(tmp)).size
    await fs.rename(tmp, file)

    totalBefore += originalSize
    totalAfter += newSize

    const saved = originalSize - newSize
    const savedPct = originalSize > 0 ? ((saved / originalSize) * 100).toFixed(1) : '0.0'
    console.log(
      `${path.basename(file)}: ${(originalSize / 1024).toFixed(1)}KB → ${(newSize / 1024).toFixed(
        1,
      )}KB (${savedPct}% saved)`,
    )
  }

  console.log(
    `Total: ${(totalBefore / 1024).toFixed(1)}KB → ${(totalAfter / 1024).toFixed(1)}KB`,
  )
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
