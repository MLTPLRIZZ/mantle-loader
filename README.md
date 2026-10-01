# Mantle Loader

A deployable Mantle menu loader for Vercel, Cloudflare Workers, and Railway.

## Deployment Options

### Option 1: Vercel

1. Connect your GitHub repo to Vercel
2. Vercel auto-detects `vercel.json`
3. Deploy with one click

```bash
npm install -g vercel
vercel
```

### Option 2: Cloudflare Workers

1. Install Wrangler:
   ```bash
   npm install -g wrangler
   ```

2. Authenticate:
   ```bash
   wrangler login
   ```

3. Deploy:
   ```bash
   wrangler deploy
   ```

### Option 3: Railway

1. Connect your GitHub repo to Railway
2. Railway auto-detects `Procfile`
3. Deploy automatically

Or deploy via CLI:
```bash
npm install -g @railway/cli
railway link
railway up
```

## Project Structure

- `public/index.html` - Main HTML page (Vercel/Railway)
- `server.js` - Express server (Vercel/Railway)
- `worker.js` - Cloudflare Worker (Cloudflare)
- `vercel.json` - Vercel config
- `wrangler.toml` - Cloudflare config
- `Procfile` - Railway config
- `package.json` - Node dependencies

## How It Works

1. Page loads with a spinner
2. Attempts to fetch from Mantle menu endpoints in order:
   - `https://api.allorigins.win/raw?url=...` (CORS proxy)
   - `https://mantle-menu.mantleunblocked.workers.dev` (direct)
   - `https://mantle-menu.mantleunblocked.workers.dev/` (with trailing slash)
3. Displays the fetched content
4. Retry button allows manual refresh

## Notes

- All three platforms serve the same code
- Fallback URLs ensure reliability when one endpoint is blocked
- Uses Cloudflare's AllOrigins CORS proxy as first fallback
