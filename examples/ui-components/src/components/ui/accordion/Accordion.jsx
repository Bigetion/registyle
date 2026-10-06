import { getComponentBySlug } from '../../../data/components.js';
import ComponentShowcase from '../../ComponentShowcase.jsx';

const component = getComponentBySlug('accordion');

export default function Accordion() {
  return <ComponentShowcase component={component} />;
}
