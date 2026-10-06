import { getComponentBySlug } from '../../../data/components.js';
import ComponentShowcase from '../../ComponentShowcase.jsx';

const component = getComponentBySlug('bottom-navigation');

export default function BottomNavigation() {
  return <ComponentShowcase component={component} />;
}
