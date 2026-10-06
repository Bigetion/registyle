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
  getComputedStyle: { configurable: true, value: window.getComputedStyle.bind(window) },
  IS_REACT_ACT_ENVIRONMENT: { configurable: true, value: true, writable: true },
});

const React = await import('react');
const { act } = React;
const { createRoot } = await import('react-dom/client');
const { default: Popper } = await import('../dist/popper.js');

test.after(() => dom.window.close());

function bounds(left, top, width, height) {
  return {
    x: left,
    y: top,
    left,
    top,
    width,
    height,
    right: left + width,
    bottom: top + height,
    toJSON() {},
  };
}

test('Popper portals, flips, updates placement and offset, and cleans up listeners', async () => {
  Object.defineProperty(window, 'innerWidth', { configurable: true, value: 500 });
  Object.defineProperty(window, 'innerHeight', { configurable: true, value: 400 });
  Object.defineProperty(window.document.documentElement, 'clientWidth', {
    configurable: true,
    value: 500,
  });
  Object.defineProperty(window.document.documentElement, 'clientHeight', {
    configurable: true,
    value: 400,
  });

  let anchorBounds = bounds(120, 360, 40, 20);
  const popperBounds = bounds(0, 0, 100, 60);
  const getRect = window.HTMLElement.prototype.getBoundingClientRect;
  const offsetWidth = Object.getOwnPropertyDescriptor(window.HTMLElement.prototype, 'offsetWidth');
  const offsetHeight = Object.getOwnPropertyDescriptor(
    window.HTMLElement.prototype,
    'offsetHeight',
  );
  window.HTMLElement.prototype.getBoundingClientRect = function getBoundingClientRect() {
    if (this.dataset.testid === 'anchor') return anchorBounds;
    if (this.classList.contains('rgi-popper')) return popperBounds;
    return getRect.call(this);
  };
  Object.defineProperties(window.HTMLElement.prototype, {
    offsetWidth: {
      configurable: true,
      get() {
        if (this.dataset.testid === 'anchor') return anchorBounds.width;
        if (this.classList.contains('rgi-popper')) return popperBounds.width;
        return offsetWidth?.get?.call(this) ?? 0;
      },
    },
    offsetHeight: {
      configurable: true,
      get() {
        if (this.dataset.testid === 'anchor') return anchorBounds.height;
        if (this.classList.contains('rgi-popper')) return popperBounds.height;
        return offsetHeight?.get?.call(this) ?? 0;
      },
    },
  });

  const activeWindowListeners = new Map([
    ['scroll', new Set()],
    ['resize', new Set()],
  ]);
  const addEventListener = window.addEventListener;
  const removeEventListener = window.removeEventListener;
  window.addEventListener = function trackAdd(type, listener, ...args) {
    activeWindowListeners.get(type)?.add(listener);
    return addEventListener.call(this, type, listener, ...args);
  };
  window.removeEventListener = function trackRemove(type, listener, ...args) {
    activeWindowListeners.get(type)?.delete(listener);
    return removeEventListener.call(this, type, listener, ...args);
  };

  const rootElement = document.createElement('div');
  const portalContainer = document.createElement('div');
  document.body.append(rootElement, portalContainer);
  const root = createRoot(rootElement);
  let mounted = true;
  const customOffset = [{ name: 'offset', options: { offset: [0, 24] } }];

  function Harness({ open = true, placement = 'bottom', modifiers = [] }) {
    const anchorRef = React.useRef(null);
    return React.createElement(
      React.Fragment,
      null,
      React.createElement('button', { ref: anchorRef, 'data-testid': 'anchor' }, 'Anchor'),
      React.createElement(
        Popper,
        {
          anchorRef,
          open,
          placement,
          modifiers,
          container: portalContainer,
        },
        'Floating content',
      ),
    );
  }

  async function render(props) {
    await act(async () => {
      root.render(React.createElement(Harness, props));
      await new Promise((resolve) => setTimeout(resolve, 40));
    });
  }

  try {
    await render({});
    const popper = portalContainer.querySelector('.rgi-popper');
    assert.ok(popper, 'renders into the configured portal');
    assert.equal(popper.parentElement.className, 'rgi-portal');
    assert.equal(
      popper.getAttribute('data-popper-placement'),
      'top',
      'flips when bottom space is constrained',
    );
    assert.equal(popper.style.position, 'fixed');
    assert.notEqual(popper.style.transform, '', 'Popper.js computes a position');
    assert.equal(window.getComputedStyle(popper).visibility, 'visible');
    assert.ok(activeWindowListeners.get('resize').size > 0, 'registers Popper update listeners');
    assert.ok(
      activeWindowListeners.get('scroll').size > 0,
      'registers scroll repositioning listeners',
    );

    await render({ placement: 'left' });
    assert.equal(
      portalContainer.querySelector('.rgi-popper')?.getAttribute('data-popper-placement'),
      'left',
    );

    anchorBounds = bounds(10, 20, 40, 20);
    await act(async () => {
      window.dispatchEvent(new window.Event('resize'));
      await new Promise((resolve) => setTimeout(resolve, 40));
    });
    assert.equal(
      portalContainer.querySelector('.rgi-popper')?.getAttribute('data-popper-placement'),
      'right',
      'flips after the reference moves',
    );

    anchorBounds = bounds(120, 20, 40, 20);
    await render({ placement: 'bottom' });
    const beforeOffset = portalContainer.querySelector('.rgi-popper').style.transform;
    await render({ placement: 'bottom', modifiers: customOffset });
    const offsetPopper = portalContainer.querySelector('.rgi-popper');
    assert.equal(offsetPopper.getAttribute('data-popper-placement'), 'bottom');
    assert.notEqual(
      offsetPopper.style.transform,
      beforeOffset,
      'applies caller modifiers when recomputing position',
    );

    const closedPopper = portalContainer.querySelector('.rgi-popper');
    await render({ open: false });
    assert.equal(portalContainer.querySelector('.rgi-popper'), null);
    assert.equal(
      closedPopper.getAttribute('data-popper-placement'),
      null,
      'destroys the Popper instance on close',
    );
    assert.equal(activeWindowListeners.get('resize').size, 0, 'removes resize listeners on close');
    assert.equal(activeWindowListeners.get('scroll').size, 0, 'removes scroll listeners on close');

    await render({ open: true, placement: 'bottom' });
    assert.ok(portalContainer.querySelector('.rgi-popper'));
    await act(async () => root.unmount());
    mounted = false;
    assert.equal(portalContainer.querySelector('.rgi-popper'), null);
    assert.equal(
      activeWindowListeners.get('resize').size,
      0,
      'removes resize listeners on unmount',
    );
    assert.equal(
      activeWindowListeners.get('scroll').size,
      0,
      'removes scroll listeners on unmount',
    );
  } finally {
    if (mounted) await act(async () => root.unmount());
    window.HTMLElement.prototype.getBoundingClientRect = getRect;
    Object.defineProperties(window.HTMLElement.prototype, {
      offsetWidth: offsetWidth ?? { configurable: true, value: 0 },
      offsetHeight: offsetHeight ?? { configurable: true, value: 0 },
    });
    window.addEventListener = addEventListener;
    window.removeEventListener = removeEventListener;
    rootElement.remove();
    portalContainer.remove();
  }
});
