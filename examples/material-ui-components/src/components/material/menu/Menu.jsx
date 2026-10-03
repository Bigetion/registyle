import { getComponentBySlug } from '../../../data/components.js';
import ComponentShowcase from '../../ComponentShowcase.jsx';

const component = getComponentBySlug('menu');

export default function Menu() {
  return <ComponentShowcase component={component} />;
}
