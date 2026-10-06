import { getComponentBySlug } from '../../../data/components.js';
import ComponentShowcase from '../../ComponentShowcase.jsx';

const component = getComponentBySlug('popover');

export default function Popover() {
  return <ComponentShowcase component={component} />;
}
