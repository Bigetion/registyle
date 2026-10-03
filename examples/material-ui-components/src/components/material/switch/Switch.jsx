import { getComponentBySlug } from '../../../data/components.js';
import ComponentShowcase from '../../ComponentShowcase.jsx';

const component = getComponentBySlug('switch');

export default function Switch() {
  return <ComponentShowcase component={component} />;
}
