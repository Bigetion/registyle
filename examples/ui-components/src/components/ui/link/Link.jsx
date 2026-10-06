import { getComponentBySlug } from '../../../data/components.js';
import ComponentShowcase from '../../ComponentShowcase.jsx';

const component = getComponentBySlug('link');

export default function Link() {
  return <ComponentShowcase component={component} />;
}
