import { createElement, forwardRef } from 'react';
import { cx } from 'registyle';
import './card.styles.js';

const Card = forwardRef(function Card(
  {
    as: Component = 'article',
    children,
    className,
    elevation = 1,
    interactive = false,
    variant = 'elevated',
    ...props
  },
  ref,
) {
  return createElement(
    Component,
    {
      ...props,
      ref,
      className: cx(
        'rgi-card',
        `rgi-card-${variant}`,
        `rgi-card-elevation-${elevation}`,
        interactive && 'rgi-card-interactive',
        className,
      ),
    },
    children,
  );
});

export default Card;
