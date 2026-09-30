# Troubleshooting

Use the error message and generated CSS to find which stage is failing: registration collection, Tailwind compilation, CSS import, or browser cascade.

## `Tailwind did not generate CSS for ...`

Registyle asks Tailwind v4 to compile every utility found in the manifest. Check the utility spelling and confirm any custom theme or plugin is available through the compiler's `inputCss`:

```js
await compileToFile(manifest, './src/registyle.css', {
  inputCss: '@reference "./src/app.css"; @import "tailwindcss/utilities.css";',
  baseDir: process.cwd(),
});
```

The reference stylesheet should define the theme and CSS-first plugins used by your utilities. Do not use utilities that are only defined in an unrelated stylesheet that Tailwind never references.

## `tw` Has No Effect in the Browser

`register()` from the package root is the CSS-only runtime API. It does not compile `tw` values. Move utility styles into a build-time manifest and use `compile()`/`compileToFile()` or the Vite plugin. Keep ordinary CSS declarations in runtime registrations if you do not need Tailwind.

## Vite Serves No Registyle CSS

Check all of the following:

1. The configured `entry` imports every registration module and default-exports `getManifest()`.
2. The app imports `virtual:registyle.css` once, unless you configured `outFile` and import that file instead.
3. Registration modules live under the configured `watch` directory. Widen `watch` if they are spread across multiple folders.
4. The entry is a module, not a file that only calls `register()` without returning the collected manifest.

The plugin does not scan JSX/HTML files for registrations; only modules reachable from the entry are compiled.

## A Utility or Variant Appears to Be Ignored

Confirm that the class is present in a registration's `tw` value and that the registration is part of the manifest passed to the compiler. Registyle compiles utilities onto registered semantic selectors; it does not emit utility classes as standalone selectors.

For grouped prefixes, use a prefix followed by a parenthesized list, such as `max-sm:(flex-col items-start)` or `hover:(text-white bg-blue-700)`. Keep native Tailwind v4 single-value shorthands such as `bg-(--brand)` intact. For color alpha in Tailwind v4, use slash notation such as `bg-red-500/50`; `bg-opacity-50` is not a v4 utility.

## A Base Style Overrides a Modifier

Tailwind determines utility output order; the order of strings in `tw` is not a reliable way to resolve conflicting declarations across semantic selectors. Avoid defining the same property in both base and modifier utilities when possible. For stateful styles, use a state/attribute variant with enough specificity, for example `aria-checked:(...)`, and inspect the generated selector in the compiled CSS.

When mixing utility styles and plain CSS declarations, avoid declaring the same property in both places. Unlayered CSS declarations can outrank layered Tailwind utilities regardless of source order. Use CSS layers deliberately or keep that property in one styling path.

## CSS Runtime Styles Are Missing During SSR

Runtime styles are available from `register.extractCSS()` after registration modules have executed. Ensure your server imports/registers styles for the render before extracting the CSS, and isolate/reset registrations between independent renders when appropriate.

## Get More Help

- Check the [API reference](./API.md) for the active API contract.
- Review the [Advanced guide](./ADVANCED.md) for CSS layers, variants, themes, and container queries.
- Search [GitHub issues](https://github.com/Bigetion/registyle/issues) or open a minimal reproduction with the manifest, compiler options, and error output.
