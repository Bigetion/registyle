import assert from 'node:assert/strict';
import test from 'node:test';
import React from 'react';
import { renderToString } from 'react-dom/server';
import * as components from '../dist/index.js';

test('every root-exported component can render on the server without browser globals', () => {
  assert.equal(typeof globalThis.window, 'undefined');
  assert.equal(typeof globalThis.document, 'undefined');

  for (const [name, Component] of Object.entries(components)) {
    assert.ok(
      ['function', 'object'].includes(typeof Component),
      `${name} is a React component export`,
    );
    assert.doesNotThrow(
      () => renderToString(React.createElement(Component)),
      `${name} renders without browser globals`,
    );
  }
});
