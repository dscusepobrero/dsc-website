// scripts/generate-manifest.mjs
import fs from 'fs/promises';
import path from 'path';

const publicDir = path.join(process.cwd(), 'public');
const assetsDir = path.join(publicDir, 'assets', 'events all pictures');
const outputFile = path.join(publicDir, 'image-manifest.json');

async function generateManifest() {
  console.log('Generating image manifest...');
  const allImages = [];

  try {
    const yearDirs = await fs.readdir(assetsDir, { withFileTypes: true });

    for (const yearDir of yearDirs) {
      if (!yearDir.isDirectory()) continue;

      const yearPath = path.join(assetsDir, yearDir.name);
      const eventDirs = await fs.readdir(yearPath, { withFileTypes: true });

      for (const eventDir of eventDirs) {
        if (!eventDir.isDirectory()) continue;

        const eventPath = path.join(yearPath, eventDir.name);
        const imageFiles = await fs.readdir(eventPath);

        for (const imageFile of imageFiles) {
          if (/\.(jpe?g|png|gif|webp|avif)$/i.test(imageFile)) {
            const imageUrl = `/assets/events all pictures/${encodeURIComponent(
              yearDir.name,
            )}/${encodeURIComponent(eventDir.name)}/${encodeURIComponent(
              imageFile,
            )}`;
            allImages.push(imageUrl);
          }
        }
      }
    }

    await fs.writeFile(outputFile, JSON.stringify({ images: allImages }, null, 2));
    console.log(`✅ Image manifest created at ${outputFile} with ${allImages.length} images.`);
  } catch (error) {
    console.error('❌ Error generating image manifest:', error);
    // Create an empty manifest on error to prevent build failures
    await fs.writeFile(outputFile, JSON.stringify({ images: [] }, null, 2));
  }
}

generateManifest();