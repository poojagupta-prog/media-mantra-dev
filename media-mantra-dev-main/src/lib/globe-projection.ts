import { markets } from "@/data/markets";

const DEG = Math.PI / 180;

export const GLOBE_IMAGE = "/images/globe-network.svg";
export const GLOBE_VIEW_SIZE = 800;
export const GLOBE_ROTATION = 22;
export const GLOBE_RADIUS_RATIO = 0.42;

function normalizeLon(lon: number) {
  let value = lon;
  while (value > 180) value -= 360;
  while (value < -180) value += 360;
  return value;
}

export function projectGlobePoint(lat: number, lon: number, rotation = GLOBE_ROTATION) {
  const cx = GLOBE_VIEW_SIZE / 2;
  const cy = GLOBE_VIEW_SIZE / 2;
  const radius = GLOBE_VIEW_SIZE * GLOBE_RADIUS_RATIO;
  const lambda = (normalizeLon(lon) - rotation) * DEG;
  const phi = lat * DEG;
  const cosPhi = Math.cos(phi);
  const x3 = cosPhi * Math.sin(lambda);
  const y3 = Math.sin(phi);
  const z3 = cosPhi * Math.cos(lambda);

  return {
    left: ((cx + x3 * radius) / GLOBE_VIEW_SIZE) * 100,
    top: ((cy - y3 * radius) / GLOBE_VIEW_SIZE) * 100,
    depth: z3,
  };
}

export const globeMarketMarkers = markets.map((market) => {
  const point = projectGlobePoint(market.geo.lat, market.geo.lon);
  return {
    ...market,
    left: point.left,
    top: point.top,
    depth: point.depth,
  };
});
