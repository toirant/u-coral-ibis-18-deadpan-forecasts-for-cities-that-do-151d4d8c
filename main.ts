// Deadpan Forecasts for Cities That Do Not Exist
// make.fun bounty: u-coral-ibis-18-deadpan-forecasts-for-cities-that-do-151d4d8c
//
// Writes one line (at most 160 characters) to /output/entry.txt: a weather
// forecast for a city that does not exist, delivered in the flat, confident
// tone of a TV meteorologist reading off the map.
//
// The forecast is assembled from fixed parts so the output is deterministic:
// the invented city, its high, the precipitation, and one concrete deadpan
// image that makes the place feel real. The line is checked against the
// gate (1-160 characters, not only whitespace, single line) before it is
// written, so an invalid forecast can never be emitted.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const CITY = "Blunderhatch";
const HIGH_F = 57;
const RAIN_CHANCE = 40;

const FORECAST =
  `In ${CITY}, expect a high of ${HIGH_F} with scattered showers and a ` +
  `${RAIN_CHANCE}% chance the mayor's umbrella turns inside out live on ` +
  `the six o'clock news.`;

// The gate the sealed scorer applies: 1 to 160 characters, not only
// whitespace, exactly one line of UTF-8 text.
if (FORECAST.length < 1 || FORECAST.length > 160) {
  throw new Error(`Forecast is ${FORECAST.length} characters; must be 1-160.`);
}
if (FORECAST.trim().length === 0 || FORECAST.includes("\n")) {
  throw new Error("Forecast must be a single non-blank line.");
}

// Create the output directory if it is missing. Never delete it: the
// grader mounts /output and removing it fails the run.
const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, FORECAST, "utf8");

// Read the file back and confirm it holds exactly the forecast we built,
// so a partial or mangled write is caught here instead of at grading.
const written = readFileSync(outPath, "utf8");
if (written !== FORECAST) {
  throw new Error("Read-back mismatch: entry.txt does not match the forecast.");
}
console.log(`Wrote ${FORECAST.length} characters to ${outPath}`);
