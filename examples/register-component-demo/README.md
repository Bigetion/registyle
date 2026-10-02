# Registyle Component Demo

React/Vite port of the original register-component-demo, using Registyle's build-time Tailwind v4 adapter.

```sh
npm install
npm run dev
```

The Vite plugin in `vite.config.js` uses Registyle's defaults: it loads the manifest from `src/registyles/index.js`, watches `src/registyles`, and compiles registered Tailwind utilities with Tailwind CSS v4. The app imports `virtual:registyle.css`; Vite serves the generated CSS from memory during development and emits a CSS asset for production. Production output can be checked with `npm run build`.

Each demo component has a matching style module in `src/registyles` (for example, `table.js` and `accordion.js`). `index.js` imports those modules; shared form label, hint, and addon styles live in `form-fields.js`. Component styling uses Tailwind v4 utilities in `tw`; split long utility strings into arrays and group repeated prefixes, such as `max-md:(w-full h-auto px-4)` or `hover:(text-white bg-[var(--c-brand)])`. CSS declarations remain for tokens, resets, and values that are clearer as CSS.

## Button Workflow

The button demonstrates the full authoring path:

1. In [`src/registyles/button.js`](src/registyles/button.js), `register('btn', ...)` defines shared styles and modifiers such as `primary`, `md`, and `disabled`. Put Tailwind utilities in `tw`; use arrays to keep groups readable and grouped prefixes to avoid repeating variants.
2. [`src/components/Button.jsx`](src/components/Button.jsx) maps component props to semantic classes with `cx()` and accepts an extra `className` for one-off customization.
3. [`src/registyles/index.js`](src/registyles/index.js) gathers the registrations. The Vite plugin compiles them to CSS and rebuilds when those registration files change.

To add a variant, register its modifier and pass its name to the `Button`'s `variant` prop. The component consumer stays independent of the utility classes used to implement that variant.