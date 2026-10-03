import { getComponentBySlug } from '../../../data/components.js';
import ComponentShowcase from '../../ComponentShowcase.jsx';

const component = getComponentBySlug('dialog');

export default function Dialog() {
  return <ComponentShowcase component={component} />;
}
