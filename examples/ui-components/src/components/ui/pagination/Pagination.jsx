import { getComponentBySlug } from '../../../data/components.js';
import ComponentShowcase from '../../ComponentShowcase.jsx';

const component = getComponentBySlug('pagination');

export default function Pagination() {
  return <ComponentShowcase component={component} />;
}
