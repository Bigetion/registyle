import { getComponentBySlug } from '../../../data/components.js';
import ComponentShowcase from '../../ComponentShowcase.jsx';

const component = getComponentBySlug('badge');

export default function Badge() {
  return <ComponentShowcase component={component} />;
}
