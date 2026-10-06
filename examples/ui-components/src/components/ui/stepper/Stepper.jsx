import { getComponentBySlug } from '../../../data/components.js';
import ComponentShowcase from '../../ComponentShowcase.jsx';

const component = getComponentBySlug('stepper');

export default function Stepper() {
  return <ComponentShowcase component={component} />;
}
