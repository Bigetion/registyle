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
const { default: Autocomplete } = await import('../dist/autocomplete.js');
const { default: Accordion } = await import('../dist/accordion.js');
const { default: Alert } = await import('../dist/alert.js');
const { default: Badge } = await import('../dist/badge.js');
const { default: BottomNavigation } = await import('../dist/bottom-navigation.js');
const { BottomNavigationItem } = await import('../dist/bottom-navigation.js');
const { default: Breadcrumbs } = await import('../dist/breadcrumbs.js');
const { default: Button } = await import('../dist/button.js');
const { default: ButtonGroup } = await import('../dist/button-group.js');
const { default: Card } = await import('../dist/card.js');
const { default: Checkbox } = await import('../dist/checkbox.js');
const { default: ClickAwayListener } = await import('../dist/click-away-listener.js');
const { default: Chip } = await import('../dist/chip.js');
const { default: Divider } = await import('../dist/divider.js');
const { default: Menu } = await import('../dist/menu.js');
const { MenuItem } = await import('../dist/menu.js');
const { default: NumberField } = await import('../dist/number-field.js');
const { default: Pagination } = await import('../dist/pagination.js');
const { default: Popover } = await import('../dist/popover.js');
const { default: Progress } = await import('../dist/progress.js');
const { default: Link } = await import('../dist/link.js');
const { default: List } = await import('../dist/list.js');
const { ListItem, ListItemText } = await import('../dist/list.js');
const { default: Paper } = await import('../dist/paper.js');
const { default: RadioGroup } = await import('../dist/radio-group.js');
const { default: Rating } = await import('../dist/rating.js');
const { default: Select } = await import('../dist/select.js');
const { default: Slider } = await import('../dist/slider.js');
const { default: Snackbar } = await import('../dist/snackbar.js');
const { default: Stepper, Step } = await import('../dist/stepper.js');
const { default: Switch } = await import('../dist/switch.js');
const { default: Skeleton } = await import('../dist/skeleton.js');
const { default: Tabs } = await import('../dist/tabs.js');
const { default: TextField } = await import('../dist/text-field.js');
const { default: ToggleButton } = await import('../dist/toggle-button.js');
const { default: Typography } = await import('../dist/typography.js');
const { default: TransferList } = await import('../dist/transfer-list.js');
const { default: SpeedDial } = await import('../dist/speed-dial.js');

test.after(() => dom.window.close());

async function createHarness() {
  const mount = document.createElement('div');
  document.body.append(mount);
  const root = createRoot(mount);
  return {
    mount,
    async render(element) {
      await act(async () => {
        root.render(element);
        await new Promise((resolve) => setTimeout(resolve, 30));
      });
    },
    async dispose() {
      await act(async () => root.unmount());
      mount.remove();
    },
  };
}

test('Menu focuses and navigates enabled items, closes on item, Escape, and click-away', async () => {
  const harness = await createHarness();
  const anchor = document.createElement('button');
  document.body.append(anchor);
  const closeEvents = [];
  const menu = (open) =>
    React.createElement(
      Menu,
      {
        anchorEl: anchor,
        open,
        onClose: (event) => closeEvents.push(event.type),
      },
      React.createElement(MenuItem, null, 'First'),
      React.createElement(MenuItem, { disabled: true }, 'Disabled'),
      React.createElement(MenuItem, null, 'Last'),
    );

  try {
    await harness.render(menu(true));
    const items = [...document.querySelectorAll('[role="menuitem"]')];
    assert.equal(items.length, 3);
    assert.equal(document.activeElement, items[0]);

    items[0].dispatchEvent(
      new window.KeyboardEvent('keydown', { key: 'ArrowDown', bubbles: true }),
    );
    assert.equal(document.activeElement, items[2], 'arrow navigation skips disabled items');
    items[2].click();
    assert.equal(closeEvents.at(-1), 'click');

    await harness.render(menu(false));
    await harness.render(menu(true));
    window.dispatchEvent(new window.KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));
    assert.equal(closeEvents.at(-1), 'keydown');

    await harness.render(menu(false));
    await harness.render(menu(true));
    document.body.dispatchEvent(new window.MouseEvent('click', { bubbles: true }));
    assert.equal(closeEvents.at(-1), 'click', 'clicking outside dismisses the menu');
  } finally {
    await harness.dispose();
    anchor.remove();
  }
});

test('Popover ignores inside pointer events and reports outside and Escape reasons', async () => {
  const harness = await createHarness();
  const anchor = document.createElement('button');
  document.body.append(anchor);
  const closeReasons = [];

  try {
    await harness.render(
      React.createElement(
        Popover,
        {
          anchorEl: anchor,
          open: true,
          label: 'More information',
          onClose: (_event, reason) => closeReasons.push(reason),
        },
        React.createElement('button', null, 'Inside'),
      ),
    );
    const popover = document.querySelector('.mui-popover');
    assert.ok(popover);
    assert.equal(popover.getAttribute('aria-label'), 'More information');
    popover.dispatchEvent(new window.MouseEvent('pointerdown', { bubbles: true }));
    assert.deepEqual(closeReasons, [], 'does not close for a pointer event inside');

    document.body.dispatchEvent(new window.MouseEvent('pointerdown', { bubbles: true }));
    document.dispatchEvent(new window.KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));
    assert.deepEqual(closeReasons, ['backdropClick', 'escapeKeyDown']);
  } finally {
    await harness.dispose();
    anchor.remove();
  }
});

test('Autocomplete filters and selects with keyboard and pointer, preserving input ARIA state', async () => {
  const harness = await createHarness();
  const selected = [];
  const options = [
    { label: 'Apple', value: 'apple' },
    { label: 'Apricot', value: 'apricot' },
    { label: 'Banana', value: 'banana' },
  ];

  try {
    await harness.render(
      React.createElement(Autocomplete, {
        options,
        name: 'fruit',
        onValueChange: (value, option) => selected.push([value, option?.label]),
      }),
    );
    const input = harness.mount.querySelector('[role="combobox"]');
    await act(async () => input.focus());
    await act(async () =>
      input.dispatchEvent(new window.KeyboardEvent('keydown', { key: 'ArrowDown', bubbles: true })),
    );
    assert.equal(input.getAttribute('aria-expanded'), 'true');
    assert.equal(input.getAttribute('aria-activedescendant'), `${input.id}-listbox-option-0`);

    await act(async () =>
      input.dispatchEvent(new window.KeyboardEvent('keydown', { key: 'Enter', bubbles: true })),
    );
    assert.equal(input.value, 'Apple');
    assert.equal(input.getAttribute('aria-expanded'), 'false');
    assert.deepEqual(selected, [['apple', 'Apple']]);
    assert.equal(harness.mount.querySelector('input[type="hidden"]').value, 'apple');

    await harness.render(
      React.createElement(Autocomplete, {
        key: 'filtered',
        options,
        defaultInputValue: 'Ban',
        onValueChange: (value, selectedOption) => selected.push([value, selectedOption?.label]),
      }),
    );
    const filteredInput = harness.mount.querySelector('[role="combobox"]');
    await act(async () => filteredInput.focus());
    const option = document.getElementById(`${filteredInput.id}-listbox-option-0`);
    assert.equal(option.textContent, 'Banana');
    await act(async () => {
      option.dispatchEvent(new window.MouseEvent('mousedown', { bubbles: true }));
      option.click();
    });
    assert.deepEqual(selected.at(-1), ['banana', 'Banana']);
  } finally {
    await harness.dispose();
  }
});

test('Tabs supports numeric values and manual keyboard activation', async () => {
  const harness = await createHarness();
  const changes = [];
  const tabs = [
    { value: 10, label: 'Overview', content: 'Overview panel' },
    { value: 20, label: 'Details', content: 'Details panel' },
    { value: 30, label: 'Disabled', content: 'Disabled panel', disabled: true },
  ];

  try {
    await harness.render(
      React.createElement(Tabs, {
        tabs,
        value: 20,
        activationMode: 'manual',
        onChange: (_event, value) => changes.push(value),
      }),
    );
    let tabButtons = [...harness.mount.querySelectorAll('[role="tab"]')];
    assert.equal(tabButtons[1].getAttribute('aria-selected'), 'true');
    assert.equal(tabButtons[0].getAttribute('tabindex'), '-1');

    await act(async () => {
      tabButtons[1].focus();
      tabButtons[1].dispatchEvent(
        new window.KeyboardEvent('keydown', { key: 'ArrowLeft', bubbles: true }),
      );
    });
    assert.equal(document.activeElement, tabButtons[0]);
    assert.deepEqual(changes, [], 'manual activation only moves focus');

    await harness.render(
      React.createElement(Tabs, {
        tabs,
        defaultValue: 10,
        onChange: (_event, value) => changes.push(value),
      }),
    );
    tabButtons = [...harness.mount.querySelectorAll('[role="tab"]')];
    await act(async () => tabButtons[0].click());
    assert.deepEqual(changes, [10]);
    assert.equal(
      harness.mount.querySelector('[role="tabpanel"]:not([hidden])').textContent,
      'Overview panel',
    );
  } finally {
    await harness.dispose();
  }
});

test('Checkbox, RadioGroup, and TextField expose native form and validation behavior', async () => {
  const harness = await createHarness();
  const radioChanges = [];

  try {
    await harness.render(
      React.createElement(
        React.Fragment,
        null,
        React.createElement(Checkbox, { 'aria-label': 'Select all', indeterminate: true }),
        React.createElement(RadioGroup, {
          name: 'plan',
          legend: 'Choose a plan',
          defaultValue: 'basic',
          options: [
            { value: 'basic', label: 'Basic' },
            { value: 'pro', label: 'Pro' },
          ],
          onChange: (event) => radioChanges.push(event.currentTarget.value),
        }),
        React.createElement(TextField, {
          label: 'Email',
          type: 'email',
          errorText: 'Enter a valid email',
          required: true,
        }),
      ),
    );

    const checkbox = harness.mount.querySelector('input[type="checkbox"]');
    assert.equal(checkbox.indeterminate, true);
    assert.equal(checkbox.getAttribute('aria-checked'), 'mixed');
    assert.equal(checkbox.labels.length, 0);

    const radios = [...harness.mount.querySelectorAll('input[type="radio"]')];
    assert.equal(radios[0].checked, true);
    await act(async () => radios[1].click());
    assert.deepEqual(radioChanges, ['pro']);
    assert.equal(radios[1].checked, true);

    const input = harness.mount.querySelector('input[type="email"]');
    const label = harness.mount.querySelector('.mui-text-field-label');
    assert.equal(label.htmlFor, input.id);
    assert.equal(input.getAttribute('aria-invalid'), 'true');
    assert.ok(document.getElementById(input.getAttribute('aria-describedby')));
    assert.equal(input.required, true);
  } finally {
    await harness.dispose();
  }
});

test('Select, Switch, Slider, and NumberField preserve native constraints and callbacks', async () => {
  const harness = await createHarness();
  const numberChanges = [];

  try {
    await harness.render(
      React.createElement(
        React.Fragment,
        null,
        React.createElement(
          Select,
          {
            label: 'Region',
            defaultValue: 'west',
            error: true,
            helperText: 'Choose a region',
          },
          React.createElement('option', { value: 'west' }, 'West'),
          React.createElement('option', { value: 'east' }, 'East'),
        ),
        React.createElement(Switch, { label: 'Email alerts', defaultChecked: true }),
        React.createElement(Slider, { 'aria-label': 'Volume', min: 0, max: 10, defaultValue: 5 }),
        React.createElement(NumberField, {
          label: 'Quantity',
          min: 0,
          max: 2,
          step: 0.25,
          defaultValue: 1.5,
          onValueChange: (value) => numberChanges.push(value),
        }),
      ),
    );

    const select = harness.mount.querySelector('select');
    assert.equal(select.value, 'west');
    assert.equal(select.getAttribute('aria-invalid'), 'true');
    assert.ok(document.getElementById(select.getAttribute('aria-describedby')));

    const switchInput = harness.mount.querySelector('[role="switch"]');
    assert.equal(switchInput.checked, true);
    assert.equal(switchInput.getAttribute('aria-checked'), 'true');
    assert.equal(switchInput.labels[0].textContent, 'Email alerts');
    await act(async () => switchInput.click());
    assert.equal(switchInput.checked, false);
    assert.equal(switchInput.getAttribute('aria-checked'), 'false');

    const slider = harness.mount.querySelector('input[type="range"]');
    assert.equal(slider.min, '0');
    assert.equal(slider.max, '10');
    assert.equal(slider.value, '5');

    const numberInput = harness.mount.querySelector('input[type="number"]');
    const increment = harness.mount.querySelector('[aria-label="Increase value"]');
    assert.equal(numberInput.value, '1.5');
    await act(async () => increment.click());
    assert.equal(numberInput.value, '1.75');
    await act(async () => increment.click());
    assert.equal(numberInput.value, '2');
    assert.equal(increment.disabled, true, 'does not increment beyond max');
    assert.deepEqual(numberChanges, ['1.75', '2']);
  } finally {
    await harness.dispose();
  }
});

test('Accordion supports controlled state, disabled state, and accessible panel relationships', async () => {
  const harness = await createHarness();
  const changes = [];

  try {
    await harness.render(
      React.createElement(
        Accordion,
        {
          title: 'Advanced settings',
          expanded: false,
          onChange: (_event, expanded) => changes.push(expanded),
        },
        'Settings content',
      ),
    );
    const trigger = harness.mount.querySelector('.mui-accordion-trigger');
    const panel = harness.mount.querySelector('.mui-accordion-panel');
    assert.equal(trigger.getAttribute('aria-expanded'), 'false');
    assert.equal(trigger.getAttribute('aria-controls'), panel.id);
    assert.equal(panel.tagName, 'SECTION');
    assert.equal(panel.getAttribute('aria-labelledby'), trigger.id);
    assert.equal(panel.hidden, true);
    await act(async () => trigger.click());
    assert.deepEqual(changes, [true]);
    assert.equal(
      trigger.getAttribute('aria-expanded'),
      'false',
      'controlled state changes only when the owner updates it',
    );

    await harness.render(
      React.createElement(
        Accordion,
        {
          key: 'disabled',
          title: 'Disabled section',
          defaultExpanded: true,
          disabled: true,
        },
        'Still visible',
      ),
    );
    const disabledTrigger = harness.mount.querySelector('.mui-accordion-trigger');
    assert.equal(disabledTrigger.disabled, true);
    assert.equal(harness.mount.querySelector('.mui-accordion-panel').hidden, false);
  } finally {
    await harness.dispose();
  }
});

test('Alert and Snackbar expose severity semantics and explicit/timeout dismissal', async () => {
  const harness = await createHarness();
  const alertClose = [];
  const snackbarClose = [];

  try {
    await harness.render(
      React.createElement(
        React.Fragment,
        null,
        React.createElement(
          Alert,
          {
            severity: 'error',
            title: 'Request failed',
            icon: null,
            onClose: () => alertClose.push('closed'),
          },
          'Try again',
        ),
        React.createElement(
          Snackbar,
          {
            open: true,
            severity: 'error',
            autoHideDuration: 20,
            onClose: (reason) => snackbarClose.push(reason),
          },
          'Connection lost',
        ),
      ),
    );
    const alert = harness.mount.querySelector('.mui-alert');
    const snackbar = harness.mount.querySelector('.mui-snackbar');
    assert.equal(alert.getAttribute('role'), 'alert');
    assert.equal(alert.querySelector('.mui-alert-icon'), null);
    assert.equal(snackbar.getAttribute('role'), 'alert');
    assert.equal(snackbar.getAttribute('aria-live'), 'assertive');
    await act(async () => harness.mount.querySelector('.mui-alert-close').click());
    assert.deepEqual(alertClose, ['closed']);
    await act(async () => new Promise((resolve) => setTimeout(resolve, 40)));
    assert.deepEqual(snackbarClose, ['timeout']);

    await harness.render(
      React.createElement(
        Snackbar,
        {
          open: true,
          autoHideDuration: null,
          onClose: (reason) => snackbarClose.push(reason),
        },
        'Persistent',
      ),
    );
    await act(async () => harness.mount.querySelector('.mui-snackbar-close').click());
    assert.deepEqual(snackbarClose, ['timeout', 'closeButtonClick']);
  } finally {
    await harness.dispose();
  }
});

test('Rating, Pagination, ToggleButton, and Stepper honor keyboard, boundary, and state semantics', async () => {
  const harness = await createHarness();
  const ratings = [];
  const pages = [];
  const stepClicks = [];

  try {
    await harness.render(
      React.createElement(
        React.Fragment,
        null,
        React.createElement(Rating, {
          max: 5,
          defaultValue: 2,
          name: 'score',
          onChange: (value) => ratings.push(value),
        }),
        React.createElement(Pagination, {
          count: 5,
          page: 2,
          siblingCount: 1,
          onChange: (_event, page) => pages.push(page),
        }),
        React.createElement(ToggleButton, { selected: true }, 'Bold'),
        React.createElement(
          Stepper,
          {
            activeStep: 1,
            onStepClick: (_event, index) => stepClicks.push(index),
          },
          React.createElement(Step, { label: 'Account' }),
          React.createElement(Step, { label: 'Review' }),
          React.createElement(Step, { label: 'Confirm' }),
        ),
      ),
    );

    const ratingButtons = [...harness.mount.querySelectorAll('[role="radio"]')];
    assert.equal(ratingButtons[1].getAttribute('aria-checked'), 'true');
    assert.equal(harness.mount.querySelector('input[name="score"]').value, '2');
    await act(async () =>
      ratingButtons[1].dispatchEvent(
        new window.KeyboardEvent('keydown', { key: 'ArrowRight', bubbles: true }),
      ),
    );
    assert.deepEqual(ratings, [3]);
    assert.equal(document.activeElement, ratingButtons[2]);

    const pagination = harness.mount.querySelector('nav[aria-label="Pagination"]');
    assert.equal(pagination.querySelector('[aria-current="page"]').textContent, '2');
    await act(async () => pagination.querySelector('[aria-label="Go to next page"]').click());
    assert.deepEqual(pages, [3]);

    const toggle = harness.mount.querySelector('.mui-toggle-button');
    assert.equal(toggle.getAttribute('aria-pressed'), 'true');

    const steps = [...harness.mount.querySelectorAll('.mui-step')];
    assert.equal(steps[0].getAttribute('aria-current'), null);
    assert.equal(steps[1].getAttribute('aria-current'), 'step');
    assert.equal(steps[0].querySelector('.mui-step-indicator').textContent, '✓');
    assert.equal(steps[2].querySelector('button').disabled, true);
    await act(async () => steps[1].querySelector('button').click());
    assert.deepEqual(stepClicks, [1]);
  } finally {
    await harness.dispose();
  }
});

test('SpeedDial and TransferList update state and announce user actions', async () => {
  const harness = await createHarness();
  const actions = [];
  const changes = [];
  const items = [
    { id: 'alpha', label: 'Alpha' },
    { id: 'beta', label: 'Beta' },
  ];

  try {
    await harness.render(
      React.createElement(
        React.Fragment,
        null,
        React.createElement(SpeedDial, {
          actions: [{ name: 'Create', onClick: () => actions.push('Create') }],
          onActionClick: (_event, action) => actions.push(action.name),
        }),
        React.createElement(TransferList, {
          items,
          onChange: (value, moved) => changes.push([value, moved.map(({ id }) => id)]),
        }),
      ),
    );

    const speedDial = harness.mount.querySelector('.mui-speed-dial');
    const trigger = speedDial.querySelector('.mui-speed-dial-trigger');
    assert.equal(trigger.getAttribute('aria-expanded'), 'false');
    await act(async () => trigger.click());
    assert.equal(trigger.getAttribute('aria-expanded'), 'true');
    await act(async () => speedDial.querySelector('[aria-label="Create"]').click());
    assert.deepEqual(actions, ['Create', 'Create']);
    assert.equal(speedDial.querySelector('.mui-speed-dial-actions').hidden, true);

    const transfer = harness.mount.querySelector('.mui-transfer-list');
    const sourceCheckbox = transfer.querySelector('input[type="checkbox"]');
    await act(async () => sourceCheckbox.click());
    const moveButton = transfer.querySelector('[aria-label="Move selected to Selected"]');
    assert.equal(moveButton.disabled, false);
    await act(async () => moveButton.click());
    assert.deepEqual(changes, [[['alpha'], ['alpha']]]);
    assert.equal(
      transfer.querySelector('[aria-label="Selected"] .mui-transfer-item-label').textContent,
      'Alpha',
    );
    assert.match(transfer.querySelector('[role="status"]').textContent, /1 item moved to Selected/);
  } finally {
    await harness.dispose();
  }
});

test('BottomNavigation, Badge, Progress, and Card expose expected semantic output', async () => {
  const harness = await createHarness();
  const selected = [];

  try {
    await harness.render(
      React.createElement(
        React.Fragment,
        null,
        React.createElement(
          BottomNavigation,
          {
            value: 'home',
            onChange: (_event, value) => selected.push(value),
          },
          React.createElement(BottomNavigationItem, { value: 'home', label: 'Home' }),
          React.createElement(BottomNavigationItem, { value: 'settings', label: 'Settings' }),
        ),
        React.createElement(
          Badge,
          { badgeContent: 120, max: 99 },
          React.createElement('span', null, 'Inbox'),
        ),
        React.createElement(Progress, { value: 25, max: 50, label: 'Upload' }),
        React.createElement(Card, { as: 'section', elevation: 2 }, 'Card content'),
      ),
    );

    const navItems = [...harness.mount.querySelectorAll('.mui-bottom-navigation-item')];
    assert.equal(navItems[0].getAttribute('aria-current'), 'page');
    await act(async () => navItems[1].click());
    assert.deepEqual(selected, ['settings']);
    assert.equal(harness.mount.querySelector('.mui-badge').textContent, '99+');
    const progress = harness.mount.querySelector('[role="progressbar"]');
    assert.equal(progress.getAttribute('aria-valuenow'), '25');
    assert.equal(progress.getAttribute('aria-valuemax'), '50');
    assert.equal(harness.mount.querySelector('.mui-card').tagName, 'SECTION');
  } finally {
    await harness.dispose();
  }
});

test('click-away, menu, popover, and snackbar release listeners and timers on close', async () => {
  const documentListeners = new Map();
  const windowListeners = new Map();
  const originalDocumentAdd = document.addEventListener;
  const originalDocumentRemove = document.removeEventListener;
  const originalWindowAdd = window.addEventListener;
  const originalWindowRemove = window.removeEventListener;
  const track = (listeners, type, listener, add) => {
    if (!listeners.has(type)) listeners.set(type, new Set());
    if (add) listeners.get(type).add(listener);
    else listeners.get(type).delete(listener);
  };
  document.addEventListener = function addTracked(type, listener, ...args) {
    track(documentListeners, type, listener, true);
    return originalDocumentAdd.call(this, type, listener, ...args);
  };
  document.removeEventListener = function removeTracked(type, listener, ...args) {
    track(documentListeners, type, listener, false);
    return originalDocumentRemove.call(this, type, listener, ...args);
  };
  window.addEventListener = function addTracked(type, listener, ...args) {
    track(windowListeners, type, listener, true);
    return originalWindowAdd.call(this, type, listener, ...args);
  };
  window.removeEventListener = function removeTracked(type, listener, ...args) {
    track(windowListeners, type, listener, false);
    return originalWindowRemove.call(this, type, listener, ...args);
  };

  const anchor = document.createElement('button');
  document.body.append(anchor);
  const harness = await createHarness();
  const closeReasons = [];
  let snackbarCloseCount = 0;
  const baseline = (listeners, type) => listeners.get(type)?.size ?? 0;

  try {
    const clickAwayBaseline = baseline(documentListeners, 'click');
    await harness.render(React.createElement(ClickAwayListener, { onClickAway() {} }, 'Inside'));
    assert.equal(baseline(documentListeners, 'click'), clickAwayBaseline + 1);
    await harness.render(null);
    assert.equal(baseline(documentListeners, 'click'), clickAwayBaseline);

    const menuBaseline = baseline(windowListeners, 'keydown');
    await harness.render(
      React.createElement(
        Menu,
        {
          anchorEl: anchor,
          open: true,
          onClose: (event) => closeReasons.push(event.type),
        },
        React.createElement(MenuItem, null, 'Item'),
      ),
    );
    assert.equal(baseline(windowListeners, 'keydown'), menuBaseline + 1);
    await harness.render(null);
    assert.equal(baseline(windowListeners, 'keydown'), menuBaseline);

    const popoverPointerBaseline = baseline(documentListeners, 'pointerdown');
    const popoverKeyBaseline = baseline(documentListeners, 'keydown');
    await harness.render(
      React.createElement(
        Popover,
        {
          anchorEl: anchor,
          open: true,
          onClose: (_event, reason) => closeReasons.push(reason),
        },
        'Content',
      ),
    );
    assert.equal(baseline(documentListeners, 'pointerdown'), popoverPointerBaseline + 1);
    assert.equal(baseline(documentListeners, 'keydown'), popoverKeyBaseline + 1);
    await harness.render(null);
    assert.equal(baseline(documentListeners, 'pointerdown'), popoverPointerBaseline);
    assert.equal(baseline(documentListeners, 'keydown'), popoverKeyBaseline);

    await harness.render(
      React.createElement(
        Snackbar,
        {
          open: true,
          autoHideDuration: 200,
          onClose: () => (snackbarCloseCount += 1),
        },
        'Temporary',
      ),
    );
    await harness.render(null);
    await new Promise((resolve) => setTimeout(resolve, 220));
    assert.equal(snackbarCloseCount, 0, 'does not invoke a stale timeout callback after unmount');
  } finally {
    await harness.dispose();
    anchor.remove();
    document.addEventListener = originalDocumentAdd;
    document.removeEventListener = originalDocumentRemove;
    window.addEventListener = originalWindowAdd;
    window.removeEventListener = originalWindowRemove;
  }
});

test('buttons, chips, navigation, and presentational primitives preserve semantic DOM contracts', async () => {
  const harness = await createHarness();
  const deleted = [];

  try {
    await harness.render(
      React.createElement(
        React.Fragment,
        null,
        React.createElement(Button, { type: 'button', variant: 'outlined', size: 'small' }, 'Save'),
        React.createElement(
          ButtonGroup,
          { orientation: 'vertical', 'aria-label': 'Formatting' },
          React.createElement(ToggleButton, { selected: true }, 'Bold'),
        ),
        React.createElement(Chip, { onClick() {}, selected: true }, 'React'),
        React.createElement(Chip, { onDelete: () => deleted.push('React') }, 'React'),
        React.createElement(
          Breadcrumbs,
          { maxItems: 2 },
          React.createElement(Link, { href: '/home' }, 'Home'),
          React.createElement(Link, { href: '/projects' }, 'Projects'),
          React.createElement('span', null, 'Current'),
        ),
        React.createElement(Typography, { variant: 'h2' }, 'Heading'),
        React.createElement(Divider, { orientation: 'vertical' }),
        React.createElement(Skeleton, { width: 80, height: 12 }),
        React.createElement(
          List,
          { ordered: true, dense: true },
          React.createElement(
            ListItem,
            { divider: true },
            React.createElement(ListItemText, { primary: 'Primary', secondary: 'Secondary' }),
          ),
        ),
        React.createElement(Paper, { square: true }, 'Paper'),
      ),
    );

    const button = harness.mount.querySelector('.mui-button');
    assert.equal(button.type, 'button');
    assert.ok(button.className.includes('mui-button-outlined'));
    assert.ok(button.className.includes('mui-button-small'));
    assert.equal(harness.mount.querySelector('.mui-button-group').getAttribute('role'), 'group');

    const chips = harness.mount.querySelectorAll('.mui-chip');
    assert.equal(chips[0].tagName, 'BUTTON');
    assert.equal(chips[0].getAttribute('aria-pressed'), 'true');
    await act(async () => chips[1].querySelector('.mui-chip-delete').click());
    assert.deepEqual(deleted, ['React']);

    const crumbs = harness.mount.querySelectorAll('.mui-breadcrumbs-item');
    assert.equal(crumbs.length, 3);
    assert.equal(crumbs[0].textContent.includes('Home'), true);
    assert.equal(
      harness.mount.querySelector('.mui-breadcrumbs-ellipsis .sr-only').textContent,
      'More breadcrumb items',
    );
    assert.equal(
      harness.mount
        .querySelector('.mui-breadcrumbs-item:last-child > span')
        .getAttribute('aria-current'),
      'page',
    );

    assert.equal(harness.mount.querySelector('h2').textContent, 'Heading');
    assert.equal(harness.mount.querySelector('[aria-orientation="vertical"]').tagName, 'HR');
    assert.equal(harness.mount.querySelector('.mui-skeleton').getAttribute('aria-hidden'), 'true');
    assert.equal(harness.mount.querySelector('ol.mui-list').tagName, 'OL');
    assert.equal(harness.mount.querySelector('.mui-list-primary').textContent, 'Primary');
    assert.ok(harness.mount.querySelector('.mui-paper').className.includes('mui-paper-square'));
  } finally {
    await harness.dispose();
  }
});
