// Builds a ready-to-use brand kit into /brand-kit (repo root, NOT deployed) —
// avatars for social profiles, horizontal lockups for email signatures / web,
// a text wordmark, and the editable SVG sources. Run: node scripts/brand-kit.mjs
import { Resvg } from "@resvg/resvg-js";
import { readFileSync, writeFileSync, mkdirSync, copyFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const brand = join(root, "public", "brand");
const out = join(root, "brand-kit");

const INK = "#0B0F0D";

function render(svgPath, width, background) {
  const svg = readFileSync(svgPath, "utf-8");
  return new Resvg(svg, {
    fitTo: { mode: "width", value: width },
    font: { loadSystemFonts: true },
    background: background ?? "rgba(0,0,0,0)",
  })
    .render()
    .asPng();
}

function write(rel, buf) {
  const p = join(out, rel);
  mkdirSync(dirname(p), { recursive: true });
  writeFileSync(p, buf);
  console.log("  " + rel);
}

// --- Avatars (square, solid dark) — profile pictures -------------------------
// Rendered on the brand ink so it's a clean full square on any platform.
const iconSvg = join(brand, "icon", "icon-bare.svg");
for (const s of [800, 512, 400, 180]) {
  write(`avatars/avatar-${s}.png`, render(iconSvg, s, INK));
}

// --- Horizontal lockups — email signatures, web headers ----------------------
// On DARK backgrounds: the colour logo (Xerxes gradient + cream Duane).
const hl = join(brand, "logo", "logo-horizontal.svg");
write("email-and-web/lockup-on-dark@1x.png", render(hl, 600));
write("email-and-web/lockup-on-dark@2x.png", render(hl, 1200));
// On LIGHT/WHITE backgrounds: the all-ink monochrome lockup (email, letterhead).
const hlLight = join(brand, "mono", "logo-black.svg");
write("email-and-web/lockup-on-light@1x.png", render(hlLight, 600));
write("email-and-web/lockup-on-light@2x.png", render(hlLight, 1200));

// --- Wordmark only (no mark) -------------------------------------------------
write("wordmark/wordmark-on-dark@2x.png", render(join(brand, "wordmark", "wordmark.svg"), 800));

// --- Editable vector sources -------------------------------------------------
const svgSources = [
  ["icon/icon.svg", "svg/app-icon.svg"],
  ["icon/icon-bare.svg", "svg/mark-only.svg"],
  ["logo/logo-horizontal.svg", "svg/lockup-horizontal-dark.svg"],
  ["logo/logo-stacked-endorsed.svg", "svg/lockup-stacked-tagline.svg"],
  ["mono/logo-black.svg", "svg/lockup-horizontal-light.svg"],
  ["mono/logo-gold.svg", "svg/lockup-gold.svg"],
  ["wordmark/wordmark.svg", "svg/wordmark.svg"],
];
for (const [src, dest] of svgSources) {
  const p = join(out, dest);
  mkdirSync(dirname(p), { recursive: true });
  copyFileSync(join(brand, src), p);
  console.log("  " + dest);
}

// --- Usage guide -------------------------------------------------------------
const readme = `XERXES DUANE — BRAND KIT
========================

PROFILE PICTURES (square)  ->  avatars/
  The Open-X mark on the brand ink square. Pick by platform:
    LinkedIn / X (Twitter)     avatar-400.png
    Instagram / Facebook       avatar-512.png
    YouTube / high-res         avatar-800.png
    small / favicon-ish        avatar-180.png

EMAIL SIGNATURES & WEB  ->  email-and-web/
  lockup-on-light  ->  use on WHITE / light backgrounds (most email signatures,
                       letterheads, documents). All-ink, fully legible.
  lockup-on-dark   ->  use on DARK backgrounds (dark email themes, site footers).
                       Colour version: "Xerxes" in gold, "Duane" in cream.
  @2x is the retina/high-res file — use it and let it display at half size.
  Typical email-signature display width: ~180-220px.

WORDMARK (text only, no mark)  ->  wordmark/

EDITABLE SOURCES (scale to any size, recolour)  ->  svg/
  Open in Figma / Illustrator / Inkscape. Vectors never pixelate.

COLOURS
  Gold    #DAA442      Cream  #F3EFE6      Ink (dark)  #0B0F0D
  Gold gradient (the "Xerxes" highlight):  #F4EFE6 -> #E8C173 -> #DAA442

Need a size or format that's not here (ICO, a banner/cover image, a specific
social dimension)? Ask and it'll be added. Regenerate anytime:
  node scripts/brand-kit.mjs
`;
write("README.txt", Buffer.from(readme, "utf-8"));

console.log("\nBrand kit written to /brand-kit");
