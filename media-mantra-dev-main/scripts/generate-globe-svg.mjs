import { writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const DEG = Math.PI / 180;
const DOT_STEP = 2.4;
const CENTER_LON = 22;
const SIZE = 800;
const CX = SIZE / 2;
const CY = SIZE / 2;
const R = SIZE * 0.42;

const markets = [
  { label: "India", lat: 28.6, lon: 77.2 },
  { label: "US", lat: 31.0, lon: -99.0 },
  { label: "Australia", lat: -33.9, lon: 151.2 },
  { label: "Singapore", lat: 1.3, lon: 103.8 },
  { label: "UAE", lat: 25.2, lon: 55.3 },
];

function normalizeLon(lon) {
  let value = lon;
  while (value > 180) value -= 360;
  while (value < -180) value += 360;
  return value;
}

function isLand(lat, lon) {
  const L = normalizeLon(lon);
  if (lat > 12 && lat < 72 && L > -168 && L < -52) return true;
  if (lat > -56 && lat < 13 && L > -82 && L < -34) return true;
  if (lat > 35 && lat < 72 && L > -12 && L < 42) return true;
  if (lat > -35 && lat < 37 && L > -18 && L < 52) return true;
  if (lat > 8 && lat < 75 && L > 55 && L < 145) return true;
  if (lat > 12 && lat < 42 && L > 25 && L < 62) return true;
  if (lat > 6 && lat < 36 && L > 68 && L < 92) return true;
  if (lat > -11 && lat < 29 && L > 95 && L < 141) return true;
  if (lat > -44 && lat < -10 && L > 112 && L < 155) return true;
  if (lat > 60 && lat < 84 && L > -75 && L < -10) return true;
  return false;
}

function project(lat, lon, rotation) {
  const lambda = (normalizeLon(lon) - rotation) * DEG;
  const phi = lat * DEG;
  const cosPhi = Math.cos(phi);
  const x3 = cosPhi * Math.sin(lambda);
  const y3 = Math.sin(phi);
  const z3 = cosPhi * Math.cos(lambda);
  return { x: CX + x3 * R, y: CY - y3 * R, z: z3 };
}

const dots = [];
for (let lat = -82; lat <= 82; lat += DOT_STEP) {
  for (let lon = -180; lon < 180; lon += DOT_STEP) {
    if (!isLand(lat, lon)) continue;
    const p = project(lat, lon, CENTER_LON);
    if (p.z < 0.05) continue;
    const alpha = 0.22 + p.z * 0.58;
    const r = 0.95 + p.z * 0.85;
    dots.push(
      `<circle cx="${p.x.toFixed(2)}" cy="${p.y.toFixed(2)}" r="${r.toFixed(2)}" fill="#d8d8d8" fill-opacity="${alpha.toFixed(3)}"/>`,
    );
  }
}

const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${SIZE} ${SIZE}" aria-hidden="true">
  <defs>
    <clipPath id="globeClip">
      <circle cx="${CX}" cy="${CY}" r="${R}"/>
    </clipPath>
  </defs>
  <g clip-path="url(#globeClip)">
    ${dots.join("\n    ")}
  </g>
  <circle cx="${CX}" cy="${CY}" r="${R}" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>
</svg>`;

const out = join(dirname(fileURLToPath(import.meta.url)), "..", "public", "images", "globe-network.svg");
writeFileSync(out, svg);
console.log(`Wrote ${out} (${dots.length} dots)`);
