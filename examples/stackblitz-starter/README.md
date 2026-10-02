# registyle starter

Minimal starter template for [registyle](https://github.com/Bigetion/registyle) — React + Vite.

## What's included

- `src/registyles/button.js` — Button with variants and sizes
- `src/registyles/badge.js` — Badge with color variants
- `src/registyles/card.js` — Card group slots (header, body, footer)
- `src/registyles/input.js` — Input field with error state
- `src/registyles/index.js` — Manifest entry (add more files here)

## Run locally

```sh
npm install
npm run dev
```

## How to add a new component

1. Create `src/registyles/your-component.js`
2. Import it in `src/registyles/index.js`
3. Use the class names in your JSX: `<div className="your-component">`

## Learn more

- [Full documentation](https://github.com/Bigetion/registyle/tree/master/docs)
- [API reference](https://github.com/Bigetion/registyle/blob/master/docs/API.md)
- [Component demo](https://github.com/Bigetion/registyle/tree/master/examples/register-component-demo)
