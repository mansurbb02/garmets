# Bulk / Exchange — Landing Page

A plain static site: `index.html` + `style.css` + `script.js`. No framework, no bundler, no Node.js, no `package.json` — nothing to `npm install`. Just three files, linked to each other with normal `<link>`/`<script src>` tags.

## Files

- `index.html` — markup, content, inline SVG garment-flat icons
- `style.css` — all styling (design tokens, layout, responsive rules)
- `script.js` — countdown timers + the Buy Solo/Build a Group toggle
- `vercel.json` — static hosting config (optional but included)

## Deploy on Vercel via GitHub

1. Create a new GitHub repo and push these files (`index.html`, `vercel.json`) to the root.
2. Go to [vercel.com/new](https://vercel.com/new), import the repo.
3. Framework preset: **Other** (Vercel auto-detects the static `index.html` — no build command, no output directory needed).
4. Click **Deploy**.

That's it — Vercel serves `index.html` at your root URL.

## Local preview

Just open `index.html` directly in a browser, or run a quick local server:

```bash
npx serve .
```
