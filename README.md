# Mantle Loader

A deployable Mantle menu loader for Vercel, Cloudflare Workers, Railway, and Replit.

## Deploy now

[![Deploy to Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FMLTPLRIZZ%2Fmantle-loader&project-name=mantle-loader&repo-name=mantle-loader)

[![Deploy to Railway](https://railway.app/button.svg)](https://railway.app/new/github?repo=MLTPLRIZZ/mantle-loader)

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://dash.cloudflare.com/)

[![Deploy to Replit](https://raw.githubusercontent.com/replit/replit/master/public/images/deploy-button.svg)](https://replit.com/github/MLTPLRIZZ/mantle-loader)

## What it does

This project loads a Mantle menu by trying several fallback URLs and rendering the response in the page.

The frontend uses a loading spinner, then attempts to fetch from:

- `https://api.allorigins.win/raw?url=https://mantle-menu.mantleunblocked.workers.dev`
- `https://mantle-menu.mantleunblocked.workers.dev`
- `https://mantle-menu.mantleunblocked.workers.dev/`

If all fail, it shows an error state instead of hanging forever.

## Project structure

- `public/index.html` — main HTML page
- `server.js` — Express server for Railway/Vercel
- `worker.js` — Cloudflare Worker
- `vercel.json` — Vercel config
- `wrangler.toml` — Cloudflare config
- `Procfile` — Railway config
- `deploy.html` — deployment landing page

## Local development

```bash
npm install
npm start
