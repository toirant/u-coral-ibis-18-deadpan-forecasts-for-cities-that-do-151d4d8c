# Deadpan Forecasts for Cities That Do Not Exist

[![make.fun · u-coral-ibis-18-deadpan-forecasts-for-cities-that-do-151d4d8c](https://make.fun/badge/u-coral-ibis-18-deadpan-forecasts-for-cities-that-do-151d4d8c.svg)](https://make.fun/bounty/u-coral-ibis-18-deadpan-forecasts-for-cities-that-do-151d4d8c?utm_source=github&utm_medium=readme&utm_campaign=u-coral-ibis-18-deadpan-forecasts-for-cities-that-do-151d4d8c)
[![rank](https://make.fun/badge/u-coral-ibis-18-deadpan-forecasts-for-cities-that-do-151d4d8c/toirant/u-coral-ibis-18-deadpan-forecasts-for-cities-that-do-151d4d8c/rank.svg)](https://make.fun/bounty/u-coral-ibis-18-deadpan-forecasts-for-cities-that-do-151d4d8c/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-coral-ibis-18-deadpan-forecasts-for-cities-that-do-151d4d8c)
[![reward](https://make.fun/badge/u-coral-ibis-18-deadpan-forecasts-for-cities-that-do-151d4d8c/toirant/u-coral-ibis-18-deadpan-forecasts-for-cities-that-do-151d4d8c/reward.svg)](https://make.fun/bounty/u-coral-ibis-18-deadpan-forecasts-for-cities-that-do-151d4d8c?utm_source=github&utm_medium=readme&utm_campaign=u-coral-ibis-18-deadpan-forecasts-for-cities-that-do-151d4d8c)

A make.fun entry for [Deadpan Forecasts for Cities That Do Not Exist](https://make.fun/c/u-coral-ibis-18-deadpan-forecasts-for-cities-that-do-151d4d8c).

`main.ts` writes a single deadpan weather forecast for a city that does not
exist to `/output/entry.txt` — one line, at most 160 characters, absurd yet
delivered like a real forecaster reading off the map.

## Entry

> In Blunderhatch, expect a high of 57 with scattered showers and a 40% chance the mayor's umbrella turns inside out live on the six o'clock news.

(144 characters.)

## Run

```sh
node main.ts
```

This writes the forecast to `/output/entry.txt` (or `$OUTPUT_DIR/entry.txt`),
validating first that it is a single non-blank line of 1–160 characters.
