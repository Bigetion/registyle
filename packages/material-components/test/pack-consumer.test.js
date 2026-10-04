import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import {
  existsSync,
  mkdirSync,
  mkdtempSync,
  readFileSync,
  rmSync,
  symlinkSync,
  writeFileSync,
} from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, join, resolve } from 'node:path';
import test from 'node:test';
import { fileURLToPath } from 'node:url';

const packageDir = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const packageJson = JSON.parse(readFileSync(join(packageDir, 'package.json'), 'utf8'));
const runNpm = (args, options) =>
  process.env.npm_execpath
    ? execFileSync(process.execPath, [process.env.npm_execpath, ...args], options)
    : execFileSync('npm', args, { ...options, shell: process.platform === 'win32' });

test('packed package installs with working exports, styles, and consumer types', (context) => {
  const tempDir = mkdtempSync(join(tmpdir(), 'material-components-consumer-'));
  const appDir = join(tempDir, 'app');
  mkdirSync(appDir);

  context.after(() => rmSync(tempDir, { recursive: true, force: true }));

  const packOutput = runNpm(
    ['pack', '--ignore-scripts', '--pack-destination', tempDir, '--silent'],
    { cwd: packageDir, encoding: 'utf8' },
  );
  const tarballName = packOutput.trim().split(/\r?\n/).at(-1);
  assert.ok(tarballName?.endsWith('.tgz'), 'npm pack creates a tarball');

  runNpm(
    [
      'install',
      '--prefix',
      appDir,
      '--no-save',
      '--ignore-scripts',
      '--legacy-peer-deps',
      '--offline',
      join(tempDir, tarballName),
    ],
    { stdio: 'pipe' },
  );

  const appNodeModules = join(appDir, 'node_modules');
  const installedPackage = join(appNodeModules, '@registyle', 'material-components');
  for (const file of ['LICENSE', 'README.md', 'index.d.ts', 'dist/index.js']) {
    assert.ok(
      existsSync(join(installedPackage, file)),
      `${file} is present in the installed tarball`,
    );
  }

  const peerTargets = [
    ['react', join(packageDir, 'node_modules', 'react')],
    ['react-dom', join(packageDir, 'node_modules', 'react-dom')],
    ['@popperjs/core', join(packageDir, 'node_modules', '@popperjs', 'core')],
    ['registyle', join(packageDir, 'node_modules', 'registyle')],
    ['@types', join(packageDir, 'node_modules', '@types')],
  ];

  for (const [peer, target] of peerTargets) {
    const link = join(appNodeModules, peer);
    mkdirSync(dirname(link), { recursive: true });
    symlinkSync(target, link, 'junction');
  }

  const subpathTypeImports = Object.keys(packageJson.exports)
    .filter((exportPath) => exportPath !== '.' && exportPath !== './styles')
    .map(
      (exportPath, index) =>
        `import Subpath${index} from '${packageJson.name}/${exportPath.slice(2)}';`,
    )
    .join('\n');
  const subpathTypeValues = Object.keys(packageJson.exports)
    .filter((exportPath) => exportPath !== '.' && exportPath !== './styles')
    .map((_exportPath, index) => `Subpath${index}`)
    .join(', ');
  const typeFixture = join(appDir, 'consumer.tsx');
  writeFileSync(
    typeFixture,
    `
import { BottomNavigation, Button, Pagination, Tooltip } from '@registyle/material-components';
import type { BottomNavigationProps, PaginationProps, TooltipProps } from '@registyle/material-components';
import ButtonOnly from '@registyle/material-components/button';
${subpathTypeImports}

const bottomNavigation: BottomNavigationProps = { onChange: (_event, value) => value };
const pagination: PaginationProps = { onChange: (_event, page) => page };
const tooltip: TooltipProps = { content: <strong>Details</strong> };
export const subpathComponents = [${subpathTypeValues}];
export const consumer = <><Button /><ButtonOnly /><BottomNavigation {...bottomNavigation} /><Pagination {...pagination} /><Tooltip {...tooltip} /></>;
`,
  );

  execFileSync(
    process.execPath,
    [
      join(packageDir, 'node_modules', 'typescript', 'bin', 'tsc'),
      '--noEmit',
      '--strict',
      '--jsx',
      'react-jsx',
      '--module',
      'ESNext',
      '--moduleResolution',
      'Bundler',
      '--target',
      'ES2022',
      typeFixture,
    ],
    { cwd: appDir, stdio: 'pipe' },
  );

  const verifyImports = `
import assert from 'node:assert/strict';
const packageJson = ${JSON.stringify(packageJson)};
const root = await import('${packageJson.name}');
for (const exportPath of Object.keys(packageJson.exports)) {
  const importPath = exportPath === '.' ? packageJson.name : packageJson.name + '/' + exportPath.slice(2);
  const module = await import(importPath);
  assert.ok(Object.keys(module).length > 0, importPath + ' has public exports');
}
assert.ok(root.Button);
assert.ok(root.Tabs);
`;
  execFileSync(process.execPath, ['--input-type=module', '-e', verifyImports], {
    cwd: appDir,
    stdio: 'pipe',
  });
});
