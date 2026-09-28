# Registyle Component Demo

React/Vite port of `tailwind-to-style/examples/register-component-demo`, using Registyle's build-time Tailwind v4 adapter.

```sh
npm install
npm run dev
```

The Vite plugin in `vite.config.js` loads the manifest from `src/registyles/index.js`, compiles registered Tailwind utilities with Tailwind CSS v4, and writes semantic CSS to `.registyle/style.css`. Registration source lives in `src/registyles`; changes there trigger recompilation during development. The hidden `.registyle/` directory is generated and ignored by Git. Production output can be checked with `npm run build`.

## Button Workflow

The button demonstrates the full authoring path:

1. In [`src/registyles/button.js`](src/registyles/button.js), `register('btn', ...)` defines shared styles and modifiers such as `primary`, `md`, and `disabled`. Put Tailwind utilities in `tw`; ordinary CSS declarations can live beside them.
2. [`src/components/Button.jsx`](src/components/Button.jsx) maps component props to semantic classes with `cx()` and accepts an extra `className` for one-off customization.
3. [`src/registyles/index.js`](src/registyles/index.js) gathers the registrations. The Vite plugin compiles them to CSS and rebuilds when those registration files change.

To add a variant, register its modifier and pass its name to the `Button`'s `variant` prop. The component consumer stays independent of the utility classes used to implement that variant.