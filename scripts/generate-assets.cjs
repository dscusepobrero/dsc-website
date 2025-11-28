const fs = require('fs');
const path = require('path');

// Adjust these paths based on your project structure
// Assuming script is in /scripts/, so we go up one level (..) to root
const ROOT_DIR = path.resolve(__dirname, '..');
const PUBLIC_DIR = path.join(ROOT_DIR, 'public');
const OUTPUT_FILE = path.join(ROOT_DIR, 'server', 'image-data.json');

function getFiles(dir, fileList = []) {
  if (!fs.existsSync(dir)) return fileList;

  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      getFiles(filePath, fileList);
    } else {
      if (/\.(jpe?g|png|gif|webp|avif)$/i.test(file)) {
        // Create the web-accessible URL
        const relativePath = path.relative(PUBLIC_DIR, filePath);
        // Force forward slashes for URLs
        const webPath = '/assets/' + relativePath.split(path.sep).join('/');
        fileList.push(webPath);
      }
    }
  });
  return fileList;
}

console.log('Generating image map...');
const allImages = getFiles(path.join(PUBLIC_DIR, 'assets'));

fs.writeFileSync(OUTPUT_FILE, JSON.stringify(allImages, null, 2));
console.log(`Success! Wrote ${allImages.length} images to ${OUTPUT_FILE}`);
