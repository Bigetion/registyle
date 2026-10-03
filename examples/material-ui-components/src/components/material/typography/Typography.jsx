import { getComponentBySlug } from '../../../data/components.js';
import ComponentShowcase from '../../ComponentShowcase.jsx';

const component = getComponentBySlug('typography');

export default function Typography() {
  return <ComponentShowcase component={component} />;
}
