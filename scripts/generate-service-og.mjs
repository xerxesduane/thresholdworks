import { Resvg } from "@resvg/resvg-js";
import { writeFileSync, mkdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const outDir = join(root, "public", "brand", "og");
mkdirSync(outDir, { recursive: true });

// Branded 1200x630 OG card matching public/og-image.svg.
function ogSvg({ line1, line2, subtitle }) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#07090A"/><stop offset="0.5" stop-color="#0B0F0D"/><stop offset="1" stop-color="#07090A"/>
    </linearGradient>
    <radialGradient id="glow" cx="50%" cy="22%" r="55%">
      <stop offset="0" stop-color="#DAA442" stop-opacity="0.30"/><stop offset="1" stop-color="#DAA442" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="gold" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#F3EFE6"/><stop offset="0.5" stop-color="#E8C173"/><stop offset="1" stop-color="#DAA442"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  <rect width="1200" height="630" fill="url(#glow)"/>
  <g transform="translate(100,72)">
    <g transform="scale(1.5)" stroke-linecap="round" stroke-linejoin="round" fill="none">
      <path d="M7 31 V16 Q7 5.5 18 5.5 Q29 5.5 29 16 V31" stroke="#F3EFE6" stroke-width="2.3"/>
      <path d="M12.5 31 V17.5 Q12.5 11 18 11 Q23.5 11 23.5 17.5 V31" stroke="#DAA442" stroke-width="2.1"/>
      <circle cx="18" cy="6.2" r="1.9" fill="#DAA442"/>
      <path d="M3.5 31 H32.5" stroke="#DAA442" stroke-width="2.6"/>
    </g>
    <text x="74" y="38" font-family="Georgia, serif" font-size="32" font-weight="600" fill="#F3EFE6">Threshold <tspan fill="#DAA442">Works</tspan></text>
    <text x="75" y="58" font-family="Helvetica, Arial, sans-serif" font-size="15" letter-spacing="1.4" fill="#DAA442">by Xerxes Duane</text>
  </g>
  <text x="100" y="290" font-family="Georgia, serif" font-size="72" font-weight="600" fill="#F3EFE6">${line1}</text>
  <text x="100" y="375" font-family="Georgia, serif" font-size="72" font-weight="600" font-style="italic" fill="url(#gold)">${line2}</text>
  <text x="100" y="455" font-family="Helvetica, Arial, sans-serif" font-size="30" fill="#9AA39A">${subtitle}</text>
  <text x="100" y="560" font-family="monospace" font-size="22" letter-spacing="3" fill="#DAA442">SMART SYSTEMS.  HONEST WORK.  REAL RESULTS.</text>
</svg>`;
}

const cards = [
  {
    slug: "answer-engine-optimization-dubai",
    line1: "Answer Engine",
    line2: "Optimization (AEO)",
    subtitle: "Be the answer in AI Overviews, voice search &amp; snippets, in Dubai.",
  },
  {
    slug: "generative-engine-optimization-dubai",
    line1: "Generative Engine",
    line2: "Optimization (GEO)",
    subtitle: "Get cited by ChatGPT, Gemini &amp; Perplexity, in Dubai.",
  },
];

for (const c of cards) {
  const png = new Resvg(ogSvg(c), {
    fitTo: { mode: "width", value: 1200 },
    font: { loadSystemFonts: true },
  })
    .render()
    .asPng();
  writeFileSync(join(outDir, `${c.slug}.png`), png);
  console.log(`  og/${c.slug}.png`);
}
console.log("Service OG images generated.");
