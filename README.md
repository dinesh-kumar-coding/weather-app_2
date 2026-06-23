# 🌤️ Weather App (Open-Meteo)

A weather search app built with React, using the free Open-Meteo API (no API key required). Type a city and get its current weather. This version demonstrates **chaining two API requests** — first converting a city name to coordinates (geocoding), then fetching the weather for those coordinates.

🔗 **Live demo:** _add your Vercel URL here_

---

## Features

- **Search any city** and get its current weather
- **Live data** from the free Open-Meteo API (no key needed)
- **Two-step fetch chain:** city name → coordinates → weather
- Graceful handling of **loading**, **success**, **error**, and **empty** states
- Clean "city not found" handling
- Calm, atmospheric UI

## Built with

- **React** (functional components + hooks)
- **Vite** (build tooling)
- **Open-Meteo API** — geocoding + weather (free, no API key)
- Deployed on **Vercel**

## What I learned / React concepts used

- **Chaining dependent API requests** — the second request (weather) depends on the result of the first (coordinates)
- Building request URLs dynamically with template literals
- Robust error handling across multiple fetches: `response.ok` checks, a guard for "no results" from geocoding, and `try`/`catch`/`finally`
- The loading / success / error / empty state pattern
- Controlled form inputs and component composition

## Running locally

```bash
npm install
npm run dev
```

No API key or `.env` setup needed — Open-Meteo is free and open.

## A note on the API

Open-Meteo requires latitude/longitude coordinates rather than a city name, so this app first calls a geocoding endpoint to turn the typed city into coordinates, then fetches the weather. I also built a [version using OpenWeatherMap](#), which does city → weather in a single request but requires an API key — a good comparison of two different API designs.
