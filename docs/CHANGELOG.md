# Changelog

All notable changes to registyle will be documented in this file.

## [2.0.0] - 2026-10-02

### Added

- **Tailwind v4 Compile Path**: Compile Tailwind utilities onto semantic class names via `registyle/collector` + `registyle/compile` + Vite plugin. No utility scanning — only explicitly registered classes are compiled.
- **Vite Plugin**: `registyle/vite` plugin collects registrations from a manifest entry, compiles them through Tailwind v4, and exposes the result as `virtual:registyle.css`. Watches for changes and recompiles automatically.
- **Variant Group Expansion**: Grouped prefixes expand at compile time — `hover:(bg-blue text-white)` → `hover:bg-blue hover:text-white`, `border-(2 red-500)` → `border-2 border-red-500`.
- **`register.group()`**: Register component slots as a group — `card`, `card-title`, `card-body` — from a single call.
- **`extend` with Topological Sort**: Classes can extend other registered classes. Circular dependency is detected and reported with a clear error.
- **CSS Layers & `!important`**: `layer` and `important` options available on all registration paths.
- **Container Query Support**: `@sm`, `@md`, `@lg`, `@xl`, `@2xl` shorthand and arbitrary `@container (min-width: Xpx)` syntax.
- **CSS Optimization**: Optional minification and adjacent-rule deduplication via PostCSS AST in `compile()`.
- **Theme System** (`registyle/theme`): Design token helpers — `color()`, `space()`, `text()`, `shadow()`, `rounded()` — with `createTheme()` and `withTheme()`.
- **Variants Composer** (`registyle/variants`): CVA-inspired `createVariants()` with compound variants, default variants, and `toRegistration()` / `toManifest()` output adapters.
- **CodeSandbox / StackBlitz Support**: Auto-detect browser-based IDEs and write a physical CSS file when virtual modules are unsupported. `forceOutFile` option available for explicit override.
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

## [1.1.1] - 2024-12-15

### Fixed

- Preserve Tailwind-generated CSS by default; optimization is now explicitly opt-in.
- Use PostCSS AST operations for minification and adjacent-rule deduplication so strings, keyframes, layers, and cascade order are preserved.
- Align composed variant class names with generated manifests, including compound and boolean variants.
- Deep-merge applied presets and resolve theme-backed class factories against merged tokens.
- Detect circular `extend` chains during manifest validation.

## [1.1.0] - 2024-11-30

### Added

- Theme system with design tokens and `withTheme()` provider.
- Variant composition with `createVariants()` and compound variant support.
- Preset system with built-in shadcn, Material, Bootstrap, and Minimal presets.
- CSS layers and `!important` support.
- Container query support.
- LRU compilation cache with file tracking.
- CSS optimization (minification + deduplication).
- Debug mode with compilation stats.

## [1.0.0] - Initial Release

- Core registration API
- Tailwind v4 integration
- Vite plugin
- Basic caching
- TypeScript support
