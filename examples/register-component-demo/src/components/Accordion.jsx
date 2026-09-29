import React, { useState } from 'react';
import { cx } from 'registyle';
import { ChevronDown } from 'lucide-react';

export function Accordion({ items, className }) {
  const [open, setOpen] = useState(null);

  return (
    <div className={cx('accordion', className)}>
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={i} className="accordion-item">
            <button
              id={`accordion-trigger-${i}`}
              className="accordion-trigger"
              aria-expanded={isOpen}
              aria-controls={`accordion-panel-${i}`}
              onClick={() => setOpen(isOpen ? null : i)}
            >
              <span>{item.title}</span>
              <ChevronDown
                size={16}
                className={cx('accordion-icon', isOpen && 'accordion-icon-open')}
              />
            </button>
            {isOpen && (
              <div
                id={`accordion-panel-${i}`}
                className="accordion-content"
                role="region"
                aria-labelledby={`accordion-trigger-${i}`}
              >
                {item.content}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
