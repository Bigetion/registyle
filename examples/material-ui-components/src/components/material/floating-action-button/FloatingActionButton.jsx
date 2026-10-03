import { getComponentBySlug } from '../../../data/components.js';
import ComponentShowcase from '../../ComponentShowcase.jsx';

const component = getComponentBySlug('floating-action-button');

export default function FloatingActionButton() {
  return <ComponentShowcase component={component} />;
}
