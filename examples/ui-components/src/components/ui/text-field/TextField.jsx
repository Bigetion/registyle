import { getComponentBySlug } from '../../../data/components.js';
import ComponentShowcase from '../../ComponentShowcase.jsx';

const component = getComponentBySlug('text-field');

export default function TextField() {
  return <ComponentShowcase component={component} />;
}
