import { getComponentBySlug } from '../../../data/components.js';
import ComponentShowcase from '../../ComponentShowcase.jsx';

const component = getComponentBySlug('button');

export default function Button() {
  return <ComponentShowcase component={component} />;
}
