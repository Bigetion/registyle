import { getComponentBySlug } from '../../../data/components.js';
import ComponentShowcase from '../../ComponentShowcase.jsx';

const component = getComponentBySlug('tabs');

export default function Tabs() {
  return <ComponentShowcase component={component} />;
}
