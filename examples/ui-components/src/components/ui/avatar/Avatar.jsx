import { getComponentBySlug } from '../../../data/components.js';
import ComponentShowcase from '../../ComponentShowcase.jsx';

const component = getComponentBySlug('avatar');

export default function Avatar() {
  return <ComponentShowcase component={component} />;
}
