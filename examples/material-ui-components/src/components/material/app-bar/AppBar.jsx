import { getComponentBySlug } from '../../../data/components.js';
import ComponentShowcase from '../../ComponentShowcase.jsx';

const component = getComponentBySlug('app-bar');

export default function AppBar() {
  return <ComponentShowcase component={component} />;
}
