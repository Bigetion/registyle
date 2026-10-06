import { getComponentBySlug } from '../../../data/components.js';
import ComponentShowcase from '../../ComponentShowcase.jsx';

const component = getComponentBySlug('alert');

export default function Alert() {
  return <ComponentShowcase component={component} />;
}
