# Registyle Documentation

Use this guide to find the right workflow and reference. Registyle has two styling paths: a CSS-only runtime for plain declarations, and a build-time Tailwind v4 compiler for utility-backed semantic classes.

## Choose a Workflow

| If you need... | Use... | Start here |
| --- | --- | --- |
| Plain CSS registrations without Tailwind dependencies | Runtime `register()` and CSS extraction | [API reference](./API.md#runtime-registration) |
| Tailwind utilities compiled to named classes | `compile()` or `compileToFile()` | [API reference](./API.md#tailwind-compiler) |
| Vite dev updates and production CSS output | `registyle()` Vite plugin | [README: Vite plugin](../README.md#vite-plugin) |
| A different bundler or server-side CSS extraction | Compiler build step or runtime API | [Integrations](./INTEGRATIONS.md) |
| Conditional classes from component props | `cx()` or `createVariants()` | [API reference](./API.md#class-composition) and [Advanced guide](./ADVANCED.md#variants-composition) |

## Guided Reading

1. Start with the [README](../README.md) for installation and a working build.
2. Use the [API reference](./API.md) when wiring registrations into an app.
3. Follow [Integrations](./INTEGRATIONS.md) to connect your bundler or SSR setup.
4. Read the [Advanced guide](./ADVANCED.md) for themes, variants, CSS layers, and container queries.
5. Use [Troubleshooting](./TROUBLESHOOTING.md) when CSS is missing or a build fails.
6. Use the [Migration guide](./MIGRATION.md) when upgrading to v2.

## Examples

- [Component library demo](../examples/register-component-demo/README.md) shows a semantic component registry compiled by Vite.
- [Daymark Todo](../examples/todo-app/README.md) shows a complete app using semantic classes and Tailwind utilities.

## Reference

- [Changelog](./CHANGELOG.md)
- [GitHub issues](https://github.com/Bigetion/registyle/issues)
