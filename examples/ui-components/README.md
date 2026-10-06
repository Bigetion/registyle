# Registyle UI

A component explorer for the Registyle UI library, built with React, React Router, Popper.js, Vite, and Registyle. Every component has its own addressable page, live examples, usage snippet, and implementation source map. Component styles are registered as semantic classes and compiled by Registyle's Vite plugin.

Requires Node.js 20 or newer.

```sh
npm install
npm run dev
```

Run `npm run build` to verify the production bundle. Styles are defined in `src/registyles` and collected from `src/registyles/index.js`; the app loads the generated stylesheet through `virtual:registyle.css`.

Reusable React APIs and their base styles for all 47 components live in the standalone `@registyle/ui-components` package under `packages/ui-components`; showcase pages, interactive demos, and demo-only styles remain in this application. The app's Registyle manifest imports the package style manifest so component base rules are included in the generated stylesheet. Shared base style registrations have been removed from demo style modules to keep package styles and showcase-only styles separate.

Each component page retains its own demo and source context:

```text
src/pages/components/button/Page.jsx
src/components/ui/button/Button.jsx
src/registyles/components/button.js
```

Component metadata, groups, and descriptions are defined in `src/data/components.js`; each page route is resolved to its own page module. Shared page layout, code panels, and interaction primitives stay reusable. Component-specific styles are imported by `src/registyles/components/index.js` and registered with Registyle's collector. Floating menus, tooltips, autocomplete/select examples, and popovers share a portal-based Popper implementation with flip and overflow handling, outside-click dismissal, and Escape-key support.
