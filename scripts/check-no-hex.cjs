// Walks src/**/*.{css,js,jsx,tsx} and fails if any hex color literal is
// found outside src/styles/tokens.css. Run with: npm run lint:hex
const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..", "src");
// tokens.css defines the palette. LogoCloud.js is the one deliberate
// exception beyond it: real third-party brand marks (Docker, Python,
// PostgreSQL...) are conventionally shown in their own true colour,
// not recoloured to the site's palette.
const EXEMPT = new Set([
  path.join("src", "styles", "tokens.css"),
  path.join("src", "components", "LogoCloud", "LogoCloud.js"),
]);
const EXTENSIONS = new Set([".css", ".js", ".jsx", ".tsx"]);
const HEX_RE = /#[0-9a-fA-F]{3,8}\b/g;

function walk(dir, out = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, out);
    else if (EXTENSIONS.has(path.extname(entry.name))) out.push(full);
  }
  return out;
}

const violations = [];
for (const file of walk(ROOT)) {
  const rel = path.relative(path.join(__dirname, ".."), file);
  if (EXEMPT.has(rel)) continue;

  const content = fs.readFileSync(file, "utf8");
  const lines = content.split("\n");
  lines.forEach((line, i) => {
    const matches = line.match(HEX_RE);
    if (matches) violations.push({ file: rel, line: i + 1, matches });
  });
}

if (violations.length > 0) {
  console.error(`Found ${violations.length} hex literal(s) outside tokens.css:\n`);
  for (const v of violations) {
    console.error(`  ${v.file}:${v.line} — ${v.matches.join(", ")}`);
  }
  process.exit(1);
} else {
  console.log("No hex literals found outside tokens.css.");
}
