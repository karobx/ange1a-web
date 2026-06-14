# Ange1a.com

Static marketing site for [ange1a.com](https://ange1a.com), built with Next.js (static export), Tailwind CSS v4, and Motion.

## Local development

```bash
cd web
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### macOS: `UNABLE_TO_GET_ISSUER_CERT_LOCALLY`

If `npm install` fails with certificate errors (common with Homebrew Node), this repo includes [`web/.npmrc`](.npmrc) pointing at Homebrew's CA bundle. If your Homebrew prefix differs, run:

```bash
npm config set cafile "$(brew --prefix)/etc/ca-certificates/cert.pem"
```

Or one-off:

```bash
export NODE_EXTRA_CA_CERTS="$(brew --prefix)/etc/ca-certificates/cert.pem"
npm install
```

## Build

```bash
npm run build
```

Output is written to `web/out/` for GitHub Pages deployment.

## Deployment

Push to `main` triggers [`.github/workflows/deploy-ange1a.yml`](../.github/workflows/deploy-ange1a.yml).

**GoDaddy DNS (manual):**

1. GitHub repo → Settings → Pages → Source: GitHub Actions
2. Add custom domain `ange1a.com` (CNAME file is in `public/CNAME`)
3. GoDaddy A records → GitHub Pages IPs; `www` CNAME → `ange1a.com`
4. Submit `https://ange1a.com/sitemap.xml` in Google Search Console

## Canonical copy

Marketing copy SSOT lives in [`docs/marketing/`](../docs/marketing/).
