import DemoPanel from './DemoPanel.jsx';
import DemoPreview from './DemoPreview.jsx';

const styleSources = import.meta.glob('../registyles/components/*.js', {
  eager: true,
  query: '?raw',
  import: 'default',
});

const BUTTON_DEMOS = {
  button: {
    title: 'Button variants',
    caption: 'Choose the right visual weight for each action in your interface.',
  },
  'button-colors': {
    title: 'Semantic colors',
    caption: 'Use color to reinforce intent without changing the button behavior.',
  },
  'button-sizes': {
    title: 'Button sizes',
    caption: 'Balance compact controls with comfortable, prominent actions.',
  },
  'button-icons': {
    title: 'Icons and actions',
    caption: 'Pair icons with labels to make common actions easier to scan.',
  },
  'button-loading': {
    title: 'Loading and disabled',
    caption: 'Give feedback while an action is running and prevent duplicate submissions.',
  },
};

const AUTOCOMPLETE_DEMOS = {
  autocomplete: {
    title: 'Search and select',
    caption: 'Filter a curated list and select one framework with keyboard or pointer.',
  },
  'autocomplete-multiple': {
    title: 'Multiple selection',
    caption: 'Build a compact selection of frameworks with removable tags.',
  },
  'autocomplete-free': {
    title: 'Free solo',
    caption: 'Choose a suggestion or create a custom value that is not in the list.',
  },
};

const BUTTON_GROUP_DEMOS = {
  'button-group': {
    title: 'Segmented choices',
    caption: 'Keep a small set of mutually exclusive views in one compact control.',
  },
  'button-group-vertical': {
    title: 'Vertical controls',
    caption: 'Change orientation while keeping related actions visually connected.',
  },
  'button-group-split': {
    title: 'Split action',
    caption: 'Pair a primary action with clearly discoverable alternatives.',
  },
};

const CHECKBOX_DEMOS = {
  checkbox: {
    title: 'Checkbox states',
    caption: 'Make independent choices clear with checked, unchecked, and disabled states.',
  },
  'checkbox-indeterminate': {
    title: 'Select all and indeterminate',
    caption: 'Show partial selection clearly and let one control update a related set.',
  },
  'checkbox-group': {
    title: 'Checkbox group',
    caption: 'Collect multiple related choices and summarize the current selection.',
  },
};

const FAB_DEMOS = {
  fab: {
    title: 'Floating actions',
    caption: 'Keep the screen’s primary action easy to reach and visually distinct.',
  },
  'fab-sizes': {
    title: 'FAB sizes',
    caption: 'Choose a control size that fits the action’s prominence and available space.',
  },
  'fab-group': {
    title: 'Quick action group',
    caption: 'Reveal secondary actions from one compact floating action button.',
  },
};

const NUMBER_FIELD_DEMOS = {
  'number-field': {
    title: 'Stepped quantity',
    caption: 'Adjust a whole-number value with keyboard input or increment controls.',
  },
  'number-field-steps': {
    title: 'Custom step size',
    caption: 'Use fractional steps when a value needs more precise adjustments.',
  },
  'number-field-limits': {
    title: 'Minimum and maximum',
    caption: 'Keep changes inside an allowed range and disable controls at its limits.',
  },
};

const RADIO_GROUP_DEMOS = {
  'radio-group': {
    title: 'Single selection',
    caption: 'Present related options with clear supporting details and one selected value.',
  },
  'radio-group-row': {
    title: 'Horizontal layout',
    caption: 'Arrange short choices in a row when there is enough room.',
  },
  'radio-group-disabled': {
    title: 'Disabled option',
    caption: 'Communicate when an option is unavailable without making it selectable.',
  },
};

const RATING_DEMOS = {
  rating: {
    title: 'Interactive rating',
    caption: 'Collect a single star rating with pointer or keyboard input.',
  },
  'rating-precision': {
    title: 'Half-star precision',
    caption: 'Allow ratings in half-star increments for more nuanced feedback.',
  },
  'rating-readonly': {
    title: 'Read-only rating',
    caption: 'Present an existing rating without implying that it can be changed.',
  },
};

const SELECT_DEMOS = {
  select: {
    title: 'Single selection',
    caption: 'Choose one available option with pointer or keyboard input.',
  },
  'select-multiple': {
    title: 'Multiple selection',
    caption: 'Choose several related options and remove selections individually.',
  },
};

const SLIDER_DEMOS = {
  slider: {
    title: 'Continuous value',
    caption: 'Adjust a value smoothly across a range with pointer or keyboard input.',
  },
  'slider-range': {
    title: 'Range selection',
    caption: 'Set minimum and maximum values while keeping the selected range valid.',
  },
  'slider-marks': {
    title: 'Discrete steps',
    caption: 'Snap to labeled values when only specific increments are meaningful.',
  },
};

const SWITCH_DEMOS = {
  switch: {
    title: 'Switch states',
    caption: 'Toggle a setting on or off and distinguish disabled controls clearly.',
  },
  'switch-colors': {
    title: 'Semantic colors',
    caption: 'Use restrained color variants to communicate meaningful switch states.',
  },
  'switch-labels': {
    title: 'Labeled settings',
    caption: 'Pair switches with concise setting names and useful supporting text.',
  },
};

const TEXT_FIELD_DEMOS = {
  'text-field': {
    title: 'Basic field',
    caption: 'Collect a short text value with a clear label and helpful guidance.',
  },
  'text-field-validation': {
    title: 'Validation',
    caption: 'Show a useful email error when submitted and confirm valid input.',
  },
  'text-field-adornments': {
    title: 'Search adornment',
    caption: 'Add a leading icon and a clear action without obscuring the text input.',
  },
};

const TRANSFER_LIST_DEMOS = {
  'transfer-list': {
    title: 'Move selected items',
    caption: 'Choose items from either side and move them between available and selected lists.',
  },
  'transfer-list-selection': {
    title: 'Bulk selection',
    caption: 'Select every item at once and see partial selection reflected in the list header.',
  },
  'transfer-list-actions': {
    title: 'Move all items',
    caption: 'Move selected items or transfer an entire list with dedicated actions.',
  },
};

const TOGGLE_BUTTON_DEMOS = {
  'toggle-button': {
    title: 'View selection',
    caption: 'Switch between related content views with an exclusive pressed state.',
  },
  'toggle-button-exclusive': {
    title: 'Clearable selection',
    caption: 'Allow an active toggle to be pressed again to clear the selection.',
  },
  'toggle-button-sizes': {
    title: 'Compact icon controls',
    caption: 'Use concise icon-only toggles with accessible labels when space is limited.',
  },
};

function titleFromDemo(id) {
  return id
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');
}

export default function ComponentShowcase({ component }) {
  const stylePath = `../registyles/components/${component.slug}.js`;
  const styleSource = styleSources[stylePath];

  if (typeof styleSource !== 'string') {
    throw new Error(`Missing Registyle source for "${component.slug}" at ${stylePath}`);
  }

  return (
    <div className={`component-showcase component-showcase-${component.slug}`}>
      {component.demos.map((demoId) => {
        const demo = component.slug === 'button'
          ? BUTTON_DEMOS[demoId]
          : component.slug === 'autocomplete'
            ? AUTOCOMPLETE_DEMOS[demoId]
            : component.slug === 'button-group'
              ? BUTTON_GROUP_DEMOS[demoId]
              : component.slug === 'checkbox'
                ? CHECKBOX_DEMOS[demoId]
                : component.slug === 'floating-action-button'
                  ? FAB_DEMOS[demoId]
                  : component.slug === 'number-field'
                    ? NUMBER_FIELD_DEMOS[demoId]
                    : component.slug === 'radio-group'
                      ? RADIO_GROUP_DEMOS[demoId]
                      : component.slug === 'rating'
                        ? RATING_DEMOS[demoId]
                        : component.slug === 'select'
                          ? SELECT_DEMOS[demoId]
                          : component.slug === 'slider'
                            ? SLIDER_DEMOS[demoId]
                            : component.slug === 'switch'
                              ? SWITCH_DEMOS[demoId]
                              : component.slug === 'text-field'
                                ? TEXT_FIELD_DEMOS[demoId]
                                : component.slug === 'transfer-list'
                                  ? TRANSFER_LIST_DEMOS[demoId]
                                  : component.slug === 'toggle-button'
                                    ? TOGGLE_BUTTON_DEMOS[demoId]
            : undefined;
        return (
          <DemoPanel
            key={demoId}
            title={demo?.title ?? titleFromDemo(demoId)}
            caption={demo?.caption ?? `Explore the ${titleFromDemo(demoId).toLowerCase()} example for ${component.name} with live controls.`}
            code={styleSource}
          >
            <DemoPreview component={component} demoId={demoId} />
          </DemoPanel>
        );
      })}
    </div>
  );
}
