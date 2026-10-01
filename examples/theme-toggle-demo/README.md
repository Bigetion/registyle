# Registyle Theme Toggle Demo

A responsive landing page that demonstrates how to build theme-aware components with Registyle's Vite + Tailwind v4 adapter.

```sh
npm install
npm run dev
```

## Follow the styling path

1. [`src/registyles/tokens.js`](src/registyles/tokens.js) registers the light palette on `:root` and overrides the same CSS custom properties on `html[data-theme="dark"]`. Components refer to these semantic tokens, so their styles do not need separate dark variants.
2. [`src/registyles/landing.js`](src/registyles/landing.js) registers named component classes and Tailwind utilities. The `button` registration defines base styles and modifiers; the page and cards use the same token variables for their surfaces, text, borders, and accents.
3. [`src/registyles/index.js`](src/registyles/index.js) imports every registration and returns `getManifest()`. The Vite plugin compiles those registrations into `virtual:registyle.css`.
4. [`src/components/Button.jsx`](src/components/Button.jsx) maps a component prop to the semantic modifier with `cx()`. `DestinationCard` consumes its registered styles without knowing the underlying utilities.
5. The theme control updates the root `data-theme` attribute and persists the choice. The small bootstrap script in `index.html` restores the saved or system theme before the page paints.

This example uses an explicit attribute selector for manual theme switching. It is intentionally different from a `dark:` media variant: changing the token values updates the entire registered component system, including the reusable button and destination cards.