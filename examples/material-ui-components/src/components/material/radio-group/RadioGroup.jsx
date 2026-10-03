import { getComponentBySlug } from '../../../data/components.js';
import ComponentShowcase from '../../ComponentShowcase.jsx';

const component = getComponentBySlug('radio-group');

export default function RadioGroup() {
  return <ComponentShowcase component={component} />;
}
