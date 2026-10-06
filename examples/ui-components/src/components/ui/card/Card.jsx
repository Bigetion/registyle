import { getComponentBySlug } from '../../../data/components.js';
import ComponentShowcase from '../../ComponentShowcase.jsx';

const component = getComponentBySlug('card');

export default function Card() {
  return <ComponentShowcase component={component} />;
}
