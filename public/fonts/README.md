# Fonts

## Avenir (licensed — to be supplied by client)

Avenir is not an open/Google font, so it can't be bundled automatically. Until
the licensed web fonts are added here, the site uses **Mulish** (loaded via
next/font) as a visual stand-in.

### To activate real Avenir

Drop the licensed web font files into this folder with these exact names:

| File | Weight |
|------|--------|
| `Avenir-Book.woff2` (+ `.woff`) | 300 (light) |
| `Avenir-Roman.woff2` (+ `.woff`) | 400 (regular) |
| `Avenir-Medium.woff2` (+ `.woff`) | 500 (medium) |

The `@font-face` rules in `src/app/globals.css` already point at these paths and
list `Avenir` ahead of the Mulish fallback, so they take over the moment the
files exist — no code changes needed. (Adjust the filenames in `globals.css` if
your files are named differently.)

> Display font (**Forum**) is a free Google Font and is loaded automatically.
