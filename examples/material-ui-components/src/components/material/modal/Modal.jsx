import { getComponentBySlug } from '../../../data/components.js';
import ComponentShowcase from '../../ComponentShowcase.jsx';

const component = getComponentBySlug('modal');

export default function Modal() {
  return <ComponentShowcase component={component} />;
}
