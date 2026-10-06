import { getComponentBySlug } from '../../../data/components.js';
import ComponentShowcase from '../../ComponentShowcase.jsx';

const component = getComponentBySlug('checkbox');

export default function Checkbox() {
  return <ComponentShowcase component={component} />;
}
