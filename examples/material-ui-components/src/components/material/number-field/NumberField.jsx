import { getComponentBySlug } from '../../../data/components.js';
import ComponentShowcase from '../../ComponentShowcase.jsx';

const component = getComponentBySlug('number-field');

export default function NumberField() {
  return <ComponentShowcase component={component} />;
}
