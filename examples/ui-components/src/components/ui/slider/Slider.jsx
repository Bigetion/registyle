import { getComponentBySlug } from '../../../data/components.js';
import ComponentShowcase from '../../ComponentShowcase.jsx';

const component = getComponentBySlug('slider');

export default function Slider() {
  return <ComponentShowcase component={component} />;
}
