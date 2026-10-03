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
