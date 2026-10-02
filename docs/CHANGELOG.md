# Changelog

All notable changes to registyle will be documented in this file.

## [2.1.0] - 2026-10-02

### Added

- `CONTRIBUTING.md` — development setup, test instructions, project structure, PR guidelines, and commit conventions
- Vue + Vite quick start in the integrations guide — full walkthrough from project creation to component usage
- Next.js App Router quick start in the integrations guide — manual compiler step with build script, layout import, and dev workflow
- Biome configuration (`biome.json`) for linting and formatting — includes `noDuplicateObjectKeys` as an error, unused variable and import warnings, and `noVar` rule
- `lint` and `lint:fix` scripts in `package.json`
- Separate `lint` job in CI workflow runs Biome on every push and pull request
- End-to-end guide in `docs/ADVANCED.md` showing Variants + Theme + Collector in a single cohesive workflow, with a full React component example
- `docs/CHANGELOG-v1.md` — v1.x release history moved to a separate file so the main changelog stays focused on v2

### Changed

- `themes.dark` in `registyle/theme` is now a complete dark mode token set: semantic surface tokens (`surface`, `surfaceRaised`, `surfaceOverlay`), border tokens (`border`, `borderSubtle`), text tokens (`textPrimary`, `textSecondary`, `textDisabled`, `textInverse`), full primary color scale, status tokens (`success`, `warning`, `error`, `info`) with subtle background variants, dark-optimized gray scale, and higher-opacity shadow values
- `themes.minimal` border radius scale tightened to better reflect a minimal aesthetic
- `docs/CHANGELOG.md` — v1.x entries replaced with a link to `CHANGELOG-v1.md`

## [2.0.3] - 2026-10-02

### Added

- GitHub Actions CI workflow for Node.js 18, 20, and 22 — runs tests across Node 18, 20, and 22 on every push and pull request, with a separate lint job
- NPM version, downloads, and license badges in README
- ESM-only notice in README — documents Node.js 18+ requirement and bundler compatibility
- `sideEffects` field in `package.json` — enables more accurate tree-shaking in webpack and Rollup
- `vite-plugin`, `react`, `vue`, and `component-library` keywords in `package.json` for better NPM discoverability

### Fixed

- `virtual.d.ts` — replaced bare module declaration with a typed export so `import styles from 'virtual:registyle.css'` resolves to `string` instead of `any`
- Remove hardcoded version string from README
- Replace old library name references in demo content with `registyle`

### Changed

- Package description updated to: *"Write Tailwind utilities once. Use semantic class names everywhere."*

## [2.0.2] - 2026-10-02

### Fixed

- **CodeSandbox Vite Import**: Use direct import instead of dynamic resolution for better CodeSandbox compatibility
- Fix `createServer is not a function` error in browser-based IDEs
- Add fallback mechanism for Vite module resolution

## [2.0.1] - 2026-10-02

### Added

- **CodeSandbox/StackBlitz Support**: Auto-detect browser-based development environments and generate physical CSS file when virtual modules are not supported
- Add `forceOutFile` option to explicitly force physical file output for any environment
- Add comprehensive CodeSandbox integration guide (`docs/CODESANDBOX.md`)
- Environment detection for `CODESANDBOX_SSE`, `SANDBOX_ID`, `CODESANDBOX`, and webcontainer shell

### Fixed

- Virtual module (`virtual:registyle.css`) resolution in online IDEs like CodeSandbox and StackBlitz
- Auto-generate `src/registyle.generated.css` when virtual modules are unavailable

### Documentation

- Add quick reference guide for CodeSandbox setup
- Update troubleshooting guide with virtual module issues
- Add environment-specific recommendations for online IDEs

## [2.0.0] - 2026-10-01

### Added

- **Tailwind v4 Compile Path**: Compile Tailwind utilities onto semantic class names via `registyle/collector` + `registyle/compile` + Vite plugin. No utility scanning — only explicitly registered classes are compiled.
- **Vite Plugin**: `registyle/vite` collects registrations from a manifest entry, compiles through Tailwind v4, and exposes the result as `virtual:registyle.css`. Watches for changes and recompiles automatically.
- **Variant Group Expansion**: Grouped prefixes expand at compile time — `hover:(bg-blue text-white)` → `hover:bg-blue hover:text-white`, `border-(2 red-500)` → `border-2 border-red-500`.
- **`register.group()`**: Register component slots as a group — `card`, `card-title`, `card-body` — from a single call.
- **`extend` with Topological Sort**: Classes can extend other registered classes. Circular dependency is detected and reported with a clear error.
- **CSS Layers & `!important`**: `layer` and `important` options available on all registration paths.
- **Container Query Support**: `@sm`, `@md`, `@lg`, `@xl`, `@2xl` shorthand and arbitrary `@container (min-width: Xpx)` syntax.
- **CSS Optimization**: Optional minification and adjacent-rule deduplication via PostCSS AST in `compile()`.
- **Theme System** (`registyle/theme`): Design token helpers — `color()`, `space()`, `text()`, `shadow()`, `rounded()` — with `createTheme()` and `withTheme()`.
- **Variants Composer** (`registyle/variants`): CVA-inspired `createVariants()` with compound variants, default variants, and `toRegistration()` / `toManifest()` output adapters.
- **`cx()` helper**: Conditional class name utility (replaces `cn` from v1).
- Comprehensive documentation: API reference, integrations guide, advanced guide, troubleshooting, migration guide, and CodeSandbox setup guide.

### Breaking Changes (from v1)

- Remove `cache`, `presets`, and `validate` subpaths.
- Remove the public `optimize` subpath; optimization is available through compile options.
- Remove `cn`; use `cx` instead.
- Remove `defineVariants`, `createVariantPreset`, `variantPresets`, `createButton`, and `applyVariants`.
- Remove Vite `cache` and `cacheSize` options; Vite recompiles when watched files change.

See the [migration guide](./MIGRATION.md) for step-by-step upgrade instructions.

---

For v1.x release history, see [CHANGELOG-v1.md](./CHANGELOG-v1.md).
