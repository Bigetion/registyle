import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

const packageJson = JSON.parse(await readFile(new URL('../package.json', import.meta.url), 'utf8'));

test('every declared package export resolves through the public package paths', async () => {
  for (const exportPath of Object.keys(packageJson.exports)) {
    const importPath =
      exportPath === '.' ? packageJson.name : `${packageJson.name}/${exportPath.slice(2)}`;
    const module = await import(importPath);
    assert.ok(Object.keys(module).length > 0, `${importPath} exports a public module`);
  }
});
