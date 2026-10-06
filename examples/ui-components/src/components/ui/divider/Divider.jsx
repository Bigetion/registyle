import { getComponentBySlug } from '../../../data/components.js';
import ComponentShowcase from '../../ComponentShowcase.jsx';

const component = getComponentBySlug('divider');

export default function Divider() {
  return <ComponentShowcase component={component} />;
}
