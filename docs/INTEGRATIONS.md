# Integrations

Registyle has one dedicated bundler plugin today: Vite. The Tailwind compiler API is bundler-agnostic, so other build systems can compile a manifest in a Node build step and import the generated CSS through their normal CSS pipeline.

## Vite

Use the plugin when registrations are part of a Vite app. It loads the manifest entry, watches registration sources, serves a virtual CSS module during development, and emits CSS during production builds.

```js
// vite.config.js
import { defineConfig } from 'vite';
import { registyle } from 'registyle/vite';

export default defineConfig({
  plugins: [registyle()],
});
```

The default entry is `src/registyles/index.js`; it should import registration modules and default-export `getManifest()`. Import the generated stylesheet once from the app entry:

```js
import 'virtual:registyle.css';
```

Set `entry` and `watch` when your source layout differs. Set `outFile` only if another tool needs a physical CSS file. See the [component demo](../examples/register-component-demo/README.md) for a complete Vite app.

## Other Bundlers

Run the compiler as a build step before your app's normal build. This works with bundlers that can import CSS files:

```js
// scripts/build-styles.mjs
import { resolve } from 'node:path';
import { compileToFile } from 'registyle/compile';
import manifest from '../src/registyles/index.js';

await compileToFile(manifest, resolve('src/registyle.css'));
```

Add the script before the framework build and import the generated stylesheet from your app entry:

```json
{
  "scripts": {
    "build:styles": "node scripts/build-styles.mjs",
    "build": "npm run build:styles && your-framework-build-command"
  }
}
```

Replace `your-framework-build-command` with the command used by your app. For a custom Tailwind theme or CSS-first plugins, pass `inputCss` to `compileToFile()`; see the [Tailwind compiler guide](./API.md#tailwind-compiler).

## Runtime CSS and SSR

If the app does not need Tailwind utilities or a build-time manifest, use the CSS-only runtime API:

```js
// styles/index.js
import { register } from 'registyle';

register('notice', { padding: '0.75rem 1rem', color: '#1e3a8a' });
```

For server-side extraction, import the registration modules before calling `register.extractCSS()`:

```js
import './styles/index.js';
import { register } from 'registyle';

const css = register.extractCSS();
```

Reset the runtime registry between isolated server renders when styles must not leak from one render to another. Runtime registrations accept CSS declarations; Tailwind `tw` utilities require the compiler or Vite workflow.

## Framework Notes

Registyle does not ship dedicated Next.js, Astro, or Nuxt plugins. Use the manual compiler step above when the framework supports importing generated CSS, and follow that framework's CSS ordering and server-rendering rules. Do not import `virtual:registyle.css` outside Vite unless the bundler provides a compatible virtual module.
