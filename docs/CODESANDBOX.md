# CodeSandbox & Online IDE Integration

Registyle works with CodeSandbox, StackBlitz, and other online IDEs, but virtual modules may not work reliably in these environments. This guide shows how to configure Registyle for browser-based development environments.

## 🚀 Quick Start (5 Minutes)

### 1. Install Dependencies

```json
{
  "dependencies": {
    "registyle": "^2.0.1"
  },
  "devDependencies": {
    "@tailwindcss/postcss": "^4.3.3",
    "postcss": "^8.5.28",
    "postcss-selector-parser": "^7.1.1"
  }
}
```

### 2. Configure Vite

```js
// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { registyle } from 'registyle/vite';

export default defineConfig({
  plugins: [react(), registyle()]  // Auto-detects CodeSandbox
});
```

### 3. Create Registrations

```js
// src/registyles/button.js
import { register } from 'registyle/collector';

register('btn', {
  base: { tw: 'px-4 py-2 rounded bg-blue-600 text-white' }
});
```

```js
// src/registyles/index.js
import { getManifest } from 'registyle/collector';
import './button.js';
export default getManifest();
```

### 4. Import CSS

```js
// src/main.jsx - Use physical file instead of virtual module
import './registyle.generated.css';  // ✅ Works in CodeSandbox
```

### 5. Use Classes

```jsx
// src/App.jsx
<button className="btn">Click me</button>
```

**Done!** The plugin auto-detects CodeSandbox and generates the CSS file.

---

## The Problem

Virtual modules like `virtual:registyle.css` may fail to resolve in some online IDEs because:

1. The module resolution differs from local Vite
2. The virtual module ID isn't recognized by the browser-based bundler
3. File system access patterns differ from Node.js

## Solution 1: Auto-Detection (Recommended)

Registyle v2.0.0+ automatically detects CodeSandbox and StackBlitz environments and writes a physical CSS file when needed. **No configuration required.**

The plugin detects these environments:
- CodeSandbox (via `CODESANDBOX_SSE`, `SANDBOX_ID`, or `CODESANDBOX` env vars)
- StackBlitz (via webcontainer shell detection)

When detected, it writes CSS to `src/registyle.generated.css` automatically.

### Usage in CodeSandbox

**vite.config.js:**
```js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { registyle } from 'registyle/vite';

export default defineConfig({
  plugins: [react(), registyle()],
});
```

**src/main.jsx:**
```js
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

// Instead of virtual module, import the generated file
import './registyle.generated.css';

createRoot(document.getElementById('root')).render(<App />);
```

**Important:** Add `registyle.generated.css` to `.gitignore`:
```
# .gitignore
src/registyle.generated.css
```

## Solution 2: Explicit Configuration

Force physical file output for any environment:

**vite.config.js:**
```js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { registyle } from 'registyle/vite';

export default defineConfig({
  plugins: [
    react(),
    registyle({
      forceOutFile: true,  // ← Always write physical file
    })
  ],
});
```

Or specify a custom output path:

```js
registyle({
  outFile: 'src/styles/registyle.css',
})
```

Then import that file instead of the virtual module:

```js
import './styles/registyle.css';
```

## Solution 3: Manual Compilation

For environments where the plugin doesn't work at all, use manual compilation:

**scripts/build-styles.mjs:**
```js
import { resolve } from 'node:path';
import { compileToFile } from 'registyle/compile';
import manifest from '../src/registyles/index.js';

await compileToFile(manifest, resolve('src/registyle.css'));
console.log('✓ Styles compiled');
```

**package.json:**
```json
{
  "scripts": {
    "predev": "node scripts/build-styles.mjs",
    "dev": "vite",
    "prebuild": "node scripts/build-styles.mjs",
    "build": "vite build"
  }
}
```

**src/main.jsx:**
```js
import './registyle.css';
```

## Troubleshooting

### CSS Changes Don't Update

If you edit registration files but CSS doesn't update:

1. **Check the watch path:** Make sure `watch` option includes all registration files:
   ```js
   registyle({
     watch: 'src/registyles',  // Should cover all registration modules
   })
   ```

2. **Manual refresh:** In some online IDEs, you may need to manually refresh the preview after editing styles.

3. **Check file generation:** Verify `src/registyle.generated.css` exists and updates when you edit registrations.

### Module Not Found Error

If you see `Cannot find module 'virtual:registyle.css'`:

1. Change import in `src/main.jsx`:
   ```js
   // Before
   import 'virtual:registyle.css';
   
   // After
   import './registyle.generated.css';
   ```

2. Or configure explicit output:
   ```js
   registyle({
     outFile: 'src/registyle.css'
   })
   ```

### No CSS Output

If no CSS is generated:

1. **Check entry point:** Verify `src/registyles/index.js` exists and exports manifest:
   ```js
   import { getManifest } from 'registyle/collector';
   import './button.js';
   // ... other imports
   
   export default getManifest();  // ← Required
   ```

2. **Check imports:** Ensure registrations are imported in the entry:
   ```js
   import './button.js';   // Must import each registration file
   ```

3. **Check dependencies:** Verify these are installed:
   ```json
   {
     "devDependencies": {
       "@tailwindcss/postcss": "^4.3.3",
       "postcss": "^8.5.28",
       "postcss-selector-parser": "^7.1.1"
     }
   }
   ```

### TypeScript Errors

If TypeScript complains about the virtual module, add type declarations:

**src/vite-env.d.ts:**
```ts
/// <reference types="vite/client" />

declare module 'virtual:registyle.css' {
  const css: string;
  export default css;
}
```

Or just use the physical file import which doesn't need type declarations.

## Environment-Specific Recommendations

### CodeSandbox
- ✅ Auto-detection works
- ✅ Hot reload works
- ⚠️ First load may be slow (dependencies install)
- 💡 Use `import './registyle.generated.css'`

### StackBlitz
- ✅ Auto-detection works
- ✅ Hot reload works
- ⚠️ WebContainer may be slower than local
- 💡 Use `import './registyle.generated.css'`

### Replit
- ⚠️ May need `forceOutFile: true`
- 💡 Use explicit `outFile` configuration

### Local Development
- ✅ Virtual module works perfectly
- ✅ Fastest performance
- 💡 Use `import 'virtual:registyle.css'`

## Best Practice for Portability

To make your project work everywhere (local + online IDEs):

**vite.config.js:**
```js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { registyle } from 'registyle/vite';

export default defineConfig({
  plugins: [
    react(),
    registyle({
      // Auto-detects online IDEs and writes physical file when needed
      // No configuration needed for CodeSandbox/StackBlitz
    })
  ],
});
```

**src/main.jsx:**
```js
// Use conditional import
try {
  // Try virtual module first (works locally)
  await import('virtual:registyle.css');
} catch {
  // Fall back to physical file (works in online IDEs)
  await import('./registyle.generated.css');
}
```

Or use a simpler approach:

```js
// Always use physical file (works everywhere)
import './registyle.generated.css';
```

**package.json:**
```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build"
  }
}
```

**.gitignore:**
```
src/registyle.generated.css
```

This setup works locally and in any online IDE without changes.

## See Also

- [Troubleshooting Guide](./TROUBLESHOOTING.md)
- [Integration Guide](./INTEGRATIONS.md)
- [API Reference](./API.md)
