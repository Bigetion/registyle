import { getComponentBySlug } from '../../../data/components.js';
import ComponentShowcase from '../../ComponentShowcase.jsx';

const component = getComponentBySlug('list');

export default function List() {
  return <ComponentShowcase component={component} />;
}
