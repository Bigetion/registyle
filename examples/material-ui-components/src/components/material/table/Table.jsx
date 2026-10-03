import { getComponentBySlug } from '../../../data/components.js';
import ComponentShowcase from '../../ComponentShowcase.jsx';

const component = getComponentBySlug('table');

export default function Table() {
  return <ComponentShowcase component={component} />;
}
