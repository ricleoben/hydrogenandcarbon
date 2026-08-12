/**
 * Guards against broken content references that TypeScript cannot catch:
 * asset paths pointing at files missing from public/, and research <-> publication
 * cross-links pointing at ids that do not exist.
 *
 * Reads the data files as text so it needs no TypeScript runtime.
 * Run with `npm run check:content`.
 */
import { readFileSync, readdirSync, existsSync } from "node:fs";
import { join, extname } from "node:path";

const ASSET_PATTERN = /"(\/[^"\n]+?\.(?:png|jpe?g|gif|webp|svg|pdf|mp4|ico))"/gi;
const ID_PATTERN = /^\s{4}id: "([^"]+)"/gm;
const SOURCE_EXTENSIONS = new Set([".ts", ".tsx"]);

function collectSourceFiles(dir, files = []) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) collectSourceFiles(fullPath, files);
    else if (SOURCE_EXTENSIONS.has(extname(entry.name))) files.push(fullPath);
  }
  return files;
}

const problems = [];

// 1. Every asset referenced from source must exist in public/.
const references = new Map();
for (const file of collectSourceFiles("src")) {
  const source = readFileSync(file, "utf8");
  for (const [, reference] of source.matchAll(ASSET_PATTERN)) {
    if (!references.has(reference)) references.set(reference, new Set());
    references.get(reference).add(file);
  }
}

for (const [reference, files] of references) {
  if (!existsSync(join("public", decodeURIComponent(reference)))) {
    problems.push(`Missing asset: ${reference}\n    referenced in ${[...files].join(", ")}`);
  }
}

// 2. Research <-> publication cross-links must resolve on both sides.
const researchSource = readFileSync("src/data/h2c-research.ts", "utf8");
const publicationSource = readFileSync("src/data/h2c-publications.ts", "utf8");

const researchIds = new Set([...researchSource.matchAll(ID_PATTERN)].map(([, id]) => id));
const posterIds = new Set([...publicationSource.matchAll(ID_PATTERN)].map(([, id]) => id));

const mapBlock = researchSource.match(/researchToPublicationMap[^=]*=\s*\{([\s\S]*?)\n\};/);
if (!mapBlock) {
  problems.push("Could not locate researchToPublicationMap in src/data/h2c-research.ts");
} else {
  for (const [, researchId, publicationId] of mapBlock[1].matchAll(/"([^"]+)":\s*"([^"]+)"/g)) {
    if (!researchIds.has(researchId)) {
      problems.push(`researchToPublicationMap key is not a known research id: ${researchId}`);
    }
    if (!posterIds.has(publicationId)) {
      problems.push(`researchToPublicationMap value is not a known publication id: ${publicationId}`);
    }
  }
}

if (researchIds.size === 0 || posterIds.size === 0) {
  problems.push("Parsed zero research projects or publications - the id pattern needs updating.");
}

if (problems.length > 0) {
  console.error(`Content check failed with ${problems.length} problem(s):\n`);
  for (const problem of problems) console.error(`  - ${problem}`);
  process.exit(1);
}

console.log(
  `Content check passed: ${references.size} asset references, ${researchIds.size} research projects, ${posterIds.size} publications.`,
);
