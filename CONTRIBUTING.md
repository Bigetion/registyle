# Contributing to registyle

Thanks for your interest in contributing! This guide covers everything you need to get started.

## Table of Contents

- [Development Setup](#development-setup)
- [Running Tests](#running-tests)
- [Project Structure](#project-structure)
- [Making Changes](#making-changes)
- [Submitting a Pull Request](#submitting-a-pull-request)
- [Reporting Issues](#reporting-issues)

## Development Setup

You need Node.js 18 or later.

```sh
# Clone the repository
git clone https://github.com/Bigetion/registyle.git
cd registyle

# Install dependencies
npm install

# Install example dependencies (optional, for running the demo)
cd examples/register-component-demo
npm install
cd ../..
```

## Running Tests

```sh
# Run all tests (unit + type checks)
npm test

# Run only unit tests
node --test

# Run only type checks
npm run test:types

# Run only CodeSandbox detection tests
npm run test:codesandbox
```

All tests use Node.js built-in `node:test` — no external test framework needed.

The test suite covers:
- `test/register.test.js` — runtime registration API
- `test/compile.test.js` — Tailwind compile pipeline
- `test/variants.test.js` — variant composition
- `test/optimize.test.js` — CSS optimization
- `test/vite.test.js` — Vite plugin integration
- `type-tests/consumer.ts` — TypeScript type correctness

## Project Structure

```
registyle/
├── core-runtime.js      # CSS-only runtime engine
├── core-entry.js        # Package root entry (re-exports runtime)
├── collector.js         # Manifest collector (build-time)
├── compile.js           # Tailwind v4 compiler
├── vite.js              # Vite plugin
├── optimize.js          # CSS post-processor (minify + dedup)
├── theme.js             # Design token system
├── variants.js          # CVA-style variant composer
├── *.d.ts               # TypeScript declarations
├── docs/                # Documentation
├── examples/            # Demo application
├── test/                # Test files
└── type-tests/          # TypeScript type tests
```

### Two Styling Paths

registyle has two distinct paths — keep them separate when making changes:

**Runtime path** (`core-runtime.js`): Parses plain CSS declaration objects and injects `<style>` tags. Does **not** support `tw` utilities.

**Build/compile path** (`collector.js` + `compile.js` + `vite.js`): Collects `tw` utility registrations, compiles them through Tailwind v4, and outputs static CSS. Does **not** inject style tags.

## Making Changes

### Code Style

- ES Modules (`.js` files with `"type": "module"`)
- No external runtime dependencies — keep the package lean
- Match the existing code style: 2-space indentation, single quotes
- Add JSDoc comments for exported functions

### Adding a Feature

1. Write the implementation
2. Add tests in `test/` that cover the new behavior
3. Update the relevant docs in `docs/`
4. Update `docs/CHANGELOG.md` under an `[Unreleased]` section

### Fixing a Bug

1. Add a failing test that reproduces the bug
2. Fix the bug
3. Confirm the test passes
4. Add a note to `docs/CHANGELOG.md` under `[Unreleased]`

### TypeScript Declarations

If you change a public API, update the corresponding `.d.ts` file and add a usage to `type-tests/consumer.ts`. The type test runs with `npm run test:types`.

## Submitting a Pull Request

1. Fork the repository and create a branch from `master`:
   ```sh
   git checkout -b fix/your-fix-name
   # or
   git checkout -b feat/your-feature-name
   ```

2. Make your changes and ensure all tests pass:
   ```sh
   npm test
   ```

3. Commit with a clear message following [Conventional Commits](https://www.conventionalcommits.org/):
   ```
   fix: correct selector output for grouped modifiers
   feat: add support for @starting-style in runtime
   docs: add Vue quick start to integrations guide
   chore: bump devDependency versions
   ```

4. Push your branch and open a pull request against `master`.

5. Describe what changed and why in the PR description. Link any related issues.

## Reporting Issues

Use [GitHub Issues](https://github.com/Bigetion/registyle/issues/new) to report bugs or request features.

For bugs, please include:
- registyle version (`npm list registyle`)
- Node.js version (`node --version`)
- A minimal reproduction (code snippet or repo link)
- What you expected vs. what actually happened

## License

By contributing, you agree that your contributions will be licensed under the [MIT License](./LICENSE).
