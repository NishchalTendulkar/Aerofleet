# AeroFleet (Vite + TypeScript)

Conversion of the single-file `AeroFleet.html` into a Vite + TypeScript project.
Markup, CSS and runtime logic are carried over verbatim, so the UI is unchanged.

```
npm install
npm run dev        # dev server
npm run build      # type-check + production build into dist/
npm run preview
```

Layout
- `index.html`      static page shell (original body markup, untouched)
- `src/style.css`   original stylesheet, byte-for-byte
- `src/main.ts`     original application script, typed
- `src/assets/`     the six images that were base64 strings in the original
