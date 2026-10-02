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

## Vue + Vite

The Vite plugin works the same way in Vue projects. Install the dependencies:

```sh
npm create vite@latest my-app -- --template vue
cd my-app
npm install
npm install registyle
npm install -D @tailwindcss/postcss postcss postcss-selector-parser
```

Add the plugin to `vite.config.js`:

```js
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { registyle } from 'registyle/vite';

export default defineConfig({
  plugins: [vue(), registyle()],
});
```

Create `src/registyles/button.js`:

```js
import { register } from 'registyle/collector';

register('btn', {
  base: { tw: 'inline-flex items-center rounded-md px-4 py-2 font-medium' },
  modifiers: {
    primary: { tw: 'bg-blue-600 text-white hover:bg-blue-700' },
    secondary: { tw: 'bg-gray-100 text-gray-900 hover:bg-gray-200' },
  },
});
```

Create `src/registyles/index.js`:

```js
import { getManifest } from 'registyle/collector';
import './button.js';

export default getManifest();
```

Import the stylesheet in `src/main.js`:

```js
import { createApp } from 'vue';
import 'virtual:registyle.css';
import App from './App.vue';

createApp(App).mount('#app');
```

Use the class names in a Vue component:

```vue
<template>
  <button :class="['btn', `btn-${variant}`]">
    <slot />
  </button>
</template>

<script setup>
defineProps({
  variant: { type: String, default: 'primary' },
});
</script>
```

## Next.js (App Router)

Next.js App Router uses webpack or Turbopack, not Vite, so use the manual compiler step with a build script.

Install dependencies:

```sh
npm install registyle
npm install -D @tailwindcss/postcss postcss postcss-selector-parser
```

Create `src/registyles/button.js`:

```js
import { register } from 'registyle/collector';

register('btn', {
  base: { tw: 'inline-flex items-center rounded-md px-4 py-2 font-medium' },
  modifiers: {
    primary: { tw: 'bg-blue-600 text-white hover:bg-blue-700' },
  },
});
```

Create `src/registyles/index.js`:

```js
import { getManifest } from 'registyle/collector';
import './button.js';

export default getManifest();
```

Create `scripts/build-styles.mjs`:

```js
import { compileToFile } from 'registyle/compile';
import manifest from '../src/registyles/index.js';
import { resolve } from 'node:path';

await compileToFile(manifest, resolve('src/registyle.css'), {
  // If you use a custom Tailwind theme, reference it here:
  // inputCss: '@reference "./src/app.css";',
  // baseDir: process.cwd(),
});
```

Update `package.json` scripts to compile styles before each build:

```json
{
  "scripts": {
    "build:styles": "node scripts/build-styles.mjs",
    "build": "npm run build:styles && next build",
    "dev": "npm run build:styles && next dev"
  }
}
```

Import the generated stylesheet in your root layout (`app/layout.tsx`):

```tsx
import '../registyle.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
```

Use the class names in a Server or Client Component:

```tsx
// app/components/Button.tsx
import { cx } from 'registyle';

interface ButtonProps {
  variant?: 'primary';
  className?: string;
  children: React.ReactNode;
}

export function Button({ variant = 'primary', className, children }: ButtonProps) {
  return (
    <button className={cx('btn', `btn-${variant}`, className)}>
      {children}
    </button>
  );
}
```

> **Note:** In development, run `npm run build:styles` once before starting Next.js, then re-run it whenever you change a registration file. For automatic rebuilding during development, add a file watcher script using `chokidar` or `node --watch scripts/build-styles.mjs`.

## Framework Notes

registyle does not ship dedicated Astro or Nuxt plugins. Use the manual compiler step above when the framework supports importing generated CSS, and follow that framework's CSS ordering and server-rendering rules. Do not import `virtual:registyle.css` outside Vite unless the bundler provides a compatible virtual module.
