import { getComponentBySlug } from '../../../data/components.js';
import ComponentShowcase from '../../ComponentShowcase.jsx';

const component = getComponentBySlug('popper');

export default function Popper() {
  return <ComponentShowcase component={component} />;
}
