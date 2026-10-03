import { getComponentBySlug } from '../../../data/components.js';
import ComponentShowcase from '../../ComponentShowcase.jsx';

const component = getComponentBySlug('select');

export default function Select() {
  return <ComponentShowcase component={component} />;
}
