import assert from 'node:assert/strict';
import test from 'node:test';
import { JSDOM } from 'jsdom';

const dom = new JSDOM('<!doctype html><html><body></body></html>', { pretendToBeVisual: true });
const { window } = dom;

Object.defineProperties(globalThis, {
  window: { configurable: true, value: window },
  document: { configurable: true, value: window.document },
  navigator: { configurable: true, value: window.navigator },
  HTMLElement: { configurable: true, value: window.HTMLElement },
  Element: { configurable: true, value: window.Element },
  Node: { configurable: true, value: window.Node },
  IS_REACT_ACT_ENVIRONMENT: { configurable: true, value: true, writable: true },
});

const React = await import('react');
const { act } = React;
const { createRoot } = await import('react-dom/client');
const { default: Dialog } = await import('../dist/dialog.js');
const { default: Drawer } = await import('../dist/drawer.js');
const { default: Modal } = await import('../dist/modal.js');

test.after(() => dom.window.close());

async function createHarness() {
  const opener = document.createElement('button');
  const mount = document.createElement('div');
  document.body.append(opener, mount);
  opener.focus();
  const root = createRoot(mount);

  return {
    opener,
    async render(element) {
      await act(async () => root.render(element));
    },
    async dispose() {
      await act(async () => root.unmount());
      opener.remove();
      mount.remove();
    },
  };
}

test('Dialog handles Escape and backdrop dismissal and restores focus', async () => {
  const harness = await createHarness();
  const closeReasons = [];
  const onClose = (_event, reason) => closeReasons.push(reason);
  const dialog = (open) =>
    React.createElement(
      Dialog,
      {
        open,
        onClose,
        title: 'Confirm changes',
        description: 'Review before continuing',
      },
      React.createElement('button', null, 'Confirm'),
    );

  try {
    await harness.render(dialog(true));
    const surface = document.querySelector('[role="dialog"]');
    const backdrop = document.querySelector('.rgi-dialog-backdrop');
    assert.ok(surface);
    assert.equal(surface.getAttribute('aria-modal'), 'true');
    assert.equal(surface.getAttribute('aria-labelledby') !== null, true);
    assert.equal(surface.getAttribute('aria-describedby') !== null, true);
    assert.equal(
      document.activeElement,
      surface,
      'focuses the dialog when no visible control can be measured',
    );
    assert.equal(document.body.style.overflow, 'hidden');

    surface.dispatchEvent(new window.MouseEvent('mousedown', { bubbles: true }));
    assert.deepEqual(closeReasons, [], 'interaction inside the dialog does not dismiss it');
    backdrop.dispatchEvent(new window.MouseEvent('mousedown', { bubbles: true }));
    document.dispatchEvent(new window.KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));
    assert.deepEqual(closeReasons, ['backdropClick', 'escapeKeyDown']);

    await harness.render(dialog(false));
    assert.equal(document.querySelector('[role="dialog"]'), null);
    assert.equal(document.body.style.overflow, '');
    assert.equal(
      document.activeElement,
      harness.opener,
      'restores focus to the previously focused element',
    );
  } finally {
    await harness.dispose();
  }
});

test('Modal honors dismissal options and restores body state and focus', async () => {
  const harness = await createHarness();
  const closeReasons = [];
  const modal = (props) =>
    React.createElement(
      Modal,
      {
        open: true,
        'aria-label': 'Account settings',
        onClose: (_event, reason) => closeReasons.push(reason),
        ...props,
      },
      React.createElement('button', null, 'Save'),
    );

  try {
    await harness.render(modal({ closeOnEscape: false }));
    const surface = document.querySelector('.rgi-modal');
    const backdrop = document.querySelector('.rgi-modal-backdrop');
    assert.ok(surface);
    assert.equal(surface.getAttribute('aria-label'), 'Account settings');
    assert.equal(document.activeElement, surface);
    assert.equal(document.body.style.overflow, 'hidden');

    window.dispatchEvent(new window.KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));
    assert.deepEqual(closeReasons, [], 'does not close on Escape when disabled');
    backdrop.dispatchEvent(new window.MouseEvent('mousedown', { bubbles: true }));
    assert.deepEqual(closeReasons, ['backdropClick']);

    await harness.render(React.createElement(Modal, { open: false }));
    assert.equal(document.querySelector('.rgi-modal'), null);
    assert.equal(document.body.style.overflow, '');
    assert.equal(document.activeElement, harness.opener);
  } finally {
    await harness.dispose();
  }
});

test('temporary Drawer handles keyboard and backdrop dismissal and restores focus', async () => {
  const harness = await createHarness();
  let closeCount = 0;
  const drawer = (open) =>
    React.createElement(
      Drawer,
      {
        open,
        onClose: () => (closeCount += 1),
        'aria-label': 'Main navigation',
      },
      React.createElement('a', { href: '#home' }, 'Home'),
    );

  try {
    await harness.render(drawer(true));
    const surface = document.querySelector('.rgi-drawer');
    const backdrop = document.querySelector('.rgi-drawer-backdrop');
    assert.ok(surface);
    assert.equal(surface.getAttribute('role'), 'dialog');
    assert.equal(surface.getAttribute('aria-modal'), 'true');
    assert.equal(surface.getAttribute('aria-label'), 'Main navigation');
    assert.equal(document.activeElement, surface);

    window.dispatchEvent(new window.KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));
    backdrop.click();
    assert.equal(closeCount, 2);

    await harness.render(drawer(false));
    assert.equal(document.querySelector('.rgi-drawer'), null);
    assert.equal(document.activeElement, harness.opener);
  } finally {
    await harness.dispose();
  }
});

test('Dialog, Modal, and temporary Drawer keep keyboard focus within the overlay', async () => {
  const originalGetClientRects = window.HTMLElement.prototype.getClientRects;
  window.HTMLElement.prototype.getClientRects = function getClientRects() {
    return this.tagName === 'BUTTON' ? [{}] : [];
  };

  const overlays = [
    {
      name: 'Dialog',
      create: (children) => React.createElement(Dialog, { open: true, title: 'Dialog' }, children),
      keydown: (key, shiftKey) =>
        document.dispatchEvent(
          new window.KeyboardEvent('keydown', {
            key,
            shiftKey,
            bubbles: true,
          }),
        ),
    },
    {
      name: 'Modal',
      create: (children) => React.createElement(Modal, { open: true }, children),
      keydown: (key, shiftKey, target) =>
        target.dispatchEvent(
          new window.KeyboardEvent('keydown', {
            key,
            shiftKey,
            bubbles: true,
          }),
        ),
    },
    {
      name: 'Drawer',
      create: (children) => React.createElement(Drawer, { open: true }, children),
      keydown: (key, shiftKey, target) =>
        target.dispatchEvent(
          new window.KeyboardEvent('keydown', {
            key,
            shiftKey,
            bubbles: true,
          }),
        ),
    },
  ];

  try {
    for (const overlay of overlays) {
      const harness = await createHarness();
      try {
        await harness.render(
          overlay.create(
            React.createElement(
              React.Fragment,
              null,
              React.createElement('button', null, 'First'),
              React.createElement('button', null, 'Last'),
            ),
          ),
        );
        const buttons = [...document.querySelectorAll('[role="dialog"] button')];
        const first = buttons[0];
        const last = buttons[buttons.length - 1];
        assert.ok(first && last, `${overlay.name} renders focusable controls`);
        if (overlay.name === 'Dialog') {
          assert.equal(document.activeElement, first, 'Dialog focuses its first available control');
        }

        await act(async () => first.focus());
        await act(async () => overlay.keydown('Tab', true, first));
        assert.equal(
          document.activeElement,
          last,
          `${overlay.name} wraps Shift+Tab to the last control`,
        );
        await act(async () => overlay.keydown('Tab', false, last));
        assert.equal(
          document.activeElement,
          first,
          `${overlay.name} wraps Tab to the first control`,
        );
      } finally {
        await harness.dispose();
      }
    }
  } finally {
    window.HTMLElement.prototype.getClientRects = originalGetClientRects;
  }
});
