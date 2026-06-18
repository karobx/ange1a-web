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

Output is written to `web/out/` for Cloudflare Pages deployment.

## Deployment

This repo deploys to Cloudflare Pages using GitHub integration.

### Cloudflare Pages

1. In Cloudflare, create a new Pages project and connect this GitHub repository.
2. Use build command `npm run build`.
3. Use output directory `out`.
4. Set the production branch to `main`.
5. Set the Node.js version to `22` in the Pages build environment.
6. Add custom domains `ange1a.com` and `www.ange1a.com`.
7. Redirect `www.ange1a.com` to `https://ange1a.com`.

### DNS and Email

1. Move the domain nameservers at GoDaddy to the Cloudflare nameservers assigned to `ange1a.com`.
2. Manage all DNS records in Cloudflare after the nameserver cutover.
3. Enable Cloudflare Email Routing for `ange1a.com`.
4. Verify the destination inbox and create the forwarding rule `info@ange1a.com` to your preferred mailbox.

### GitHub Actions

Pushes to `main` and pull requests run [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) as a build verification check only. Production deployment is handled by Cloudflare Pages, not GitHub Pages.

## Canonical copy

Marketing copy SSOT lives in [`docs/marketing/`](../docs/marketing/).
