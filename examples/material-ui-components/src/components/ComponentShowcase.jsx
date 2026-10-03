import DemoPanel from './DemoPanel.jsx';
import DemoPreview from './DemoPreview.jsx';

const styleSources = import.meta.glob('../registyles/components/*.js', {
  eager: true,
  query: '?raw',
  import: 'default',
});

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
      {component.demos.map((demoId) => (
        <DemoPanel
          key={demoId}
          title={titleFromDemo(demoId)}
          caption={`Explore the ${titleFromDemo(demoId).toLowerCase()} example for ${component.name} with live controls.`}
          code={styleSource}
        >
          <DemoPreview component={component} demoId={demoId} />
        </DemoPanel>
      ))}
    </div>
  );
}
