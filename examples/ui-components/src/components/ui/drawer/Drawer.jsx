import { getComponentBySlug } from '../../../data/components.js';
import ComponentShowcase from '../../ComponentShowcase.jsx';

const component = getComponentBySlug('drawer');

export default function Drawer() {
  return <ComponentShowcase component={component} />;
}
