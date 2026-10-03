import { getComponentBySlug } from '../../../data/components.js';
import ComponentShowcase from '../../ComponentShowcase.jsx';

const component = getComponentBySlug('material-icons');

export default function MaterialIcons() {
  return <ComponentShowcase component={component} />;
}
