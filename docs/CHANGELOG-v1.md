# Changelog — v1.x

This file contains the release history for registyle v1.x.

For current releases, see [CHANGELOG.md](./CHANGELOG.md).

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
