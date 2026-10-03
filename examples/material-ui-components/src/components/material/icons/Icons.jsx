import { getComponentBySlug } from '../../../data/components.js';
import ComponentShowcase from '../../ComponentShowcase.jsx';

const component = getComponentBySlug('icons');

export default function Icons() {
  return <ComponentShowcase component={component} />;
}
