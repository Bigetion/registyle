import { getComponentBySlug } from '../../../data/components.js';
import ComponentShowcase from '../../ComponentShowcase.jsx';

const component = getComponentBySlug('rating');

export default function Rating() {
  return <ComponentShowcase component={component} />;
}
