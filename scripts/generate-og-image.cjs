// Renders public/og.png (1200x630): the orrery hero image, cropped and
// scrimmed the same way as the live hero, with the name set in Instrument
// Serif. Run with: node scripts/generate-og-image.cjs
const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const WIDTH = 1200;
const HEIGHT = 630;

async function main() {
  const srcPath = path.join(__dirname, "..", "src", "Assets", "New_photos", "imG1.jpg");
  const fontPath = path.join(__dirname, "..", "src", "styles", "fonts", "instrument-serif-latin-400.woff2");
  const fontBase64 = fs.readFileSync(fontPath).toString("base64");

  const bg = await sharp(srcPath)
    .resize({ width: WIDTH, height: HEIGHT, fit: "cover", position: "right" })
    .modulate({ saturation: 0.7 })
    .toBuffer();

  const svg = `
    <svg width="${WIDTH}" height="${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <style>
          @font-face {
            font-family: 'Instrument Serif';
            src: url(data:font/woff2;base64,${fontBase64}) format('woff2');
          }
        </style>
        <linearGradient id="scrim" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="#0f0a06" stop-opacity="1" />
          <stop offset="42%" stop-color="#0f0a06" stop-opacity="0.55" />
          <stop offset="68%" stop-color="#0f0a06" stop-opacity="0" />
        </linearGradient>
      </defs>
      <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#scrim)" />
      <text x="72" y="300" font-family="Instrument Serif" font-size="30" fill="#9c8f7e" letter-spacing="4" font-weight="400">AI / ML ENGINEER &#183; LONDON</text>
      <text x="70" y="380" font-family="Instrument Serif" font-size="76" fill="#eee5d9" font-weight="400">Viraj Bulugahapitiya</text>
    </svg>
  `;

  await sharp(bg)
    .composite([{ input: Buffer.from(svg) }])
    .png()
    .toFile(path.join(__dirname, "..", "public", "og.png"));

  console.log("Wrote public/og.png");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
