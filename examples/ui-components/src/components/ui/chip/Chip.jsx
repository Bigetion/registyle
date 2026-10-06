import { getComponentBySlug } from '../../../data/components.js';
import ComponentShowcase from '../../ComponentShowcase.jsx';

const component = getComponentBySlug('chip');

export default function Chip() {
  return <ComponentShowcase component={component} />;
}
