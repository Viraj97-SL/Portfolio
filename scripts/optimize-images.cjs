// One-off build-time script: converts raster images under src/Assets to AVIF + WebP,
// deletes the originals once the new files are verified, and prints a dimensions
// manifest used to hardcode explicit width/height props on <Picture> usages.
const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const ASSETS_DIR = path.join(__dirname, "..", "src", "Assets");
const MAX_WIDTH = 1200;
const RASTER_EXT = new Set([".png", ".jpg", ".jpeg", ".gif"]);
const SKIP_FILES = new Set(["pre.gif"]); // orphaned, deleted separately

function walk(dir) {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...walk(full));
    else out.push(full);
  }
  return out;
}

function fmtKB(bytes) {
  return `${(bytes / 1024).toFixed(1)}KB`;
}

async function processFile(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  const base = path.basename(filePath);
  if (!RASTER_EXT.has(ext) || SKIP_FILES.has(base)) return null;

  const originalSize = fs.statSync(filePath).size;
  const avifPath = filePath.slice(0, -ext.length) + ".avif";
  const webpPath = filePath.slice(0, -ext.length) + ".webp";

  const pipeline = () =>
    sharp(filePath).resize({ width: MAX_WIDTH, withoutEnlargement: true });

  await pipeline().avif({ quality: 60, effort: 4 }).toFile(avifPath);
  await pipeline().webp({ quality: 75 }).toFile(webpPath);

  // Verify both outputs decode and share the expected dimensions before deleting the original.
  const [avifMeta, webpMeta] = await Promise.all([
    sharp(avifPath).metadata(),
    sharp(webpPath).metadata(),
  ]);
  if (!avifMeta.width || !webpMeta.width || avifMeta.width !== webpMeta.width) {
    throw new Error(`Verification failed for ${base}: dimension mismatch or unreadable output`);
  }

  const avifSize = fs.statSync(avifPath).size;
  const webpSize = fs.statSync(webpPath).size;
  fs.unlinkSync(filePath);

  return {
    name: base,
    width: avifMeta.width,
    height: avifMeta.height,
    originalSize,
    avifSize,
    webpSize,
  };
}

async function main() {
  const files = walk(ASSETS_DIR);
  const results = [];
  for (const file of files) {
    const result = await processFile(file);
    if (result) results.push(result);
  }

  results.sort((a, b) => a.name.localeCompare(b.name));

  console.log("\nfile                                              w x h        original -> avif / webp");
  console.log("-".repeat(100));
  let totalOriginal = 0;
  let totalNew = 0;
  for (const r of results) {
    totalOriginal += r.originalSize;
    totalNew += r.avifSize; // avif is the primary source served to modern browsers
    console.log(
      `${r.name.padEnd(50)} ${`${r.width}x${r.height}`.padEnd(11)} ${fmtKB(r.originalSize).padStart(9)} -> ${fmtKB(r.avifSize).padStart(8)} / ${fmtKB(r.webpSize)}`
    );
  }
  console.log("-".repeat(100));
  console.log(`Total original: ${fmtKB(totalOriginal)}   Total AVIF: ${fmtKB(totalNew)}   Reduction: ${(100 - (totalNew / totalOriginal) * 100).toFixed(1)}%`);

  fs.writeFileSync(
    path.join(__dirname, "image-manifest.json"),
    JSON.stringify(
      Object.fromEntries(results.map((r) => [r.name, { width: r.width, height: r.height }])),
      null,
      2
    )
  );
  console.log(`\nWrote dimensions manifest to scripts/image-manifest.json (${results.length} images)`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
