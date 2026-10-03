import { useId, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cx } from 'registyle';

const SECTIONS = [
  {
    title: 'What is Registyle?',
    content: 'Registyle is a utility-first styling system for registering reusable, semantic component styles in your application.',
  },
  {
    title: 'How does style collection work?',
    content: 'Register a component name once, then use that name in your markup. Registyle collects the matching utility styles into your generated stylesheet.',
  },
  {
    title: 'Can I customize the theme?',
    content: 'Yes. Use your own design tokens and utility values to make each component match the rest of your product interface.',
  },
];

function AccordionItem({ section, index, expanded, disabled = false, onToggle }) {
  const panelId = useId();
  const triggerId = `${panelId}-trigger`;

  return (
    <section className={cx('accordion-item', expanded && 'accordion-item-expanded', disabled && 'accordion-item-disabled')}>
      <h3 className="accordion-heading">
        <button
          className="accordion-trigger"
          id={triggerId}
          type="button"
          aria-expanded={expanded}
          aria-controls={panelId}
          disabled={disabled}
          onClick={onToggle}
        >
          <span className="accordion-index">{String(index + 1).padStart(2, '0')}</span>
          <span className="accordion-title">{section.title}</span>
          {disabled ? (
            <span className="accordion-unavailable">Unavailable</span>
          ) : (
            <ChevronDown className="accordion-chevron" size={16} aria-hidden="true" />
          )}
        </button>
      </h3>
      <div className="accordion-panel" id={panelId} role="region" aria-labelledby={triggerId} hidden={!expanded}>
        <p>{section.content}</p>
      </div>
    </section>
  );
}

function SingleAccordion() {
  const [expanded, setExpanded] = useState(0);

  return (
    <div className="accordion-demo">
      {SECTIONS.map((section, index) => (
        <AccordionItem
          key={section.title}
          section={section}
          index={index}
          expanded={expanded === index}
          onToggle={() => setExpanded((current) => current === index ? -1 : index)}
        />
      ))}
      <span className="accordion-helper">Select a section to reveal its details.</span>
    </div>
  );
}

function MultipleAccordion() {
  const [expanded, setExpanded] = useState([0]);
  const allExpanded = expanded.length === SECTIONS.length;

  function togglePanel(index) {
    setExpanded((current) => current.includes(index)
      ? current.filter((item) => item !== index)
      : [...current, index]);
  }

  return (
    <div className="accordion-demo">
      <div className="accordion-toolbar">
        <span>Workspace help</span>
        <button type="button" onClick={() => setExpanded(allExpanded ? [] : SECTIONS.map((_, index) => index))}>
          {allExpanded ? 'Collapse all' : 'Expand all'}
        </button>
      </div>
      {SECTIONS.map((section, index) => (
        <AccordionItem
          key={section.title}
          section={section}
          index={index}
          expanded={expanded.includes(index)}
          onToggle={() => togglePanel(index)}
        />
      ))}
    </div>
  );
}

function DisabledAccordion() {
  const [expanded, setExpanded] = useState(0);

  return (
    <div className="accordion-demo">
      {SECTIONS.map((section, index) => (
        <AccordionItem
          key={section.title}
          section={section}
          index={index}
          expanded={expanded === index}
          disabled={index === 1}
          onToggle={() => setExpanded((current) => current === index ? -1 : index)}
        />
      ))}
      <span className="accordion-helper">The second panel is disabled and cannot be opened.</span>
    </div>
  );
}

export default function AccordionDemo({ demoId }) {
  if (demoId === 'accordion-controlled') return <MultipleAccordion />;
  if (demoId === 'accordion-disabled') return <DisabledAccordion />;
  return <SingleAccordion />;
}
