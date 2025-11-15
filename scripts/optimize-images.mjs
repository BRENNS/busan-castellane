import sharp from 'sharp';
import { readdirSync, statSync } from 'fs';
import { join, extname } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const ASSETS_DIR = join(__dirname, '../public/assets');
const TARGET_SIZES = {
  hero: { width: 1920, quality: 95 },
  default: { width: 1600, quality: 95 },
};

async function getFileSizeMB(filePath) {
  const stats = statSync(filePath);
  return (stats.size / (1024 * 1024)).toFixed(2);
}

async function optimizeImage(filePath, fileName) {
  const ext = extname(fileName).toLowerCase();

  if (!['.jpg', '.jpeg', '.png'].includes(ext)) {
    console.log(`⏭️  Skipping ${fileName} (not an image)`);
    return;
  }

  const originalSize = await getFileSizeMB(filePath);
  console.log(`\n📸 Processing: ${fileName} (${originalSize}MB)`);

  // Determine if this is a hero image
  const isHero = fileName.includes('hero') || fileName.includes('background');
  const config = isHero ? TARGET_SIZES.hero : TARGET_SIZES.default;

  try {
    // Create optimized WebP version
    const webpPath = filePath.replace(ext, '.webp');
    await sharp(filePath)
      .resize(config.width, null, {
        withoutEnlargement: true,
        fit: 'inside'
      })
      .webp({ quality: config.quality })
      .toFile(webpPath);

    const webpSize = await getFileSizeMB(webpPath);
    console.log(`  ✅ Created WebP: ${webpSize}MB (${config.width}px width)`);

    // Create optimized JPEG version (replace original)
    const tempPath = filePath + '.tmp';
    await sharp(filePath)
      .resize(config.width, null, {
        withoutEnlargement: true,
        fit: 'inside'
      })
      .jpeg({ quality: config.quality, progressive: true })
      .toFile(tempPath);

    const optimizedSize = await getFileSizeMB(tempPath);

    // Replace original with optimized version
    const { renameSync, unlinkSync } = await import('fs');
    unlinkSync(filePath);
    renameSync(tempPath, filePath);

    console.log(`  ✅ Optimized JPG: ${optimizedSize}MB (${config.width}px width)`);
    console.log(`  💾 Saved: ${(originalSize - optimizedSize).toFixed(2)}MB (${((1 - optimizedSize / originalSize) * 100).toFixed(1)}% reduction)`);

  } catch (error) {
    console.error(`  ❌ Error processing ${fileName}:`, error.message);
  }
}

async function processDirectory(dirPath) {
  console.log(`\n📁 Scanning directory: ${dirPath}\n`);

  const files = readdirSync(dirPath);
  let totalOriginalSize = 0;
  let totalOptimizedSize = 0;

  for (const file of files) {
    const filePath = join(dirPath, file);
    const stat = statSync(filePath);

    if (stat.isDirectory()) {
      await processDirectory(filePath);
    } else if (stat.isFile()) {
      const ext = extname(file).toLowerCase();
      if (['.jpg', '.jpeg', '.png'].includes(ext)) {
        const originalSize = parseFloat(await getFileSizeMB(filePath));
        totalOriginalSize += originalSize;

        await optimizeImage(filePath, file);

        const optimizedSize = parseFloat(await getFileSizeMB(filePath));
        totalOptimizedSize += optimizedSize;
      }
    }
  }

  return { totalOriginalSize, totalOptimizedSize };
}

console.log('🚀 Starting image optimization...\n');
console.log('Target configuration:');
console.log('  - Hero images: 1920px width, 95% quality');
console.log('  - Other images: 1600px width, 95% quality');
console.log('  - Formats: WebP + optimized JPEG');

const startTime = Date.now();

try {
  const { totalOriginalSize, totalOptimizedSize } = await processDirectory(ASSETS_DIR);
  const duration = ((Date.now() - startTime) / 1000).toFixed(2);

  console.log('\n✨ Optimization complete!\n');
  console.log('📊 Summary:');
  console.log(`  - Original size: ${totalOriginalSize.toFixed(2)}MB`);
  console.log(`  - Optimized size: ${totalOptimizedSize.toFixed(2)}MB`);
  console.log(`  - Total saved: ${(totalOriginalSize - totalOptimizedSize).toFixed(2)}MB`);
  console.log(`  - Reduction: ${((1 - totalOptimizedSize / totalOriginalSize) * 100).toFixed(1)}%`);
  console.log(`  - Duration: ${duration}s\n`);
} catch (error) {
  console.error('\n❌ Optimization failed:', error);
  process.exit(1);
}
