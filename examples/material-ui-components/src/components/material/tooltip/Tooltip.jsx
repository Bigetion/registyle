import { getComponentBySlug } from '../../../data/components.js';
import ComponentShowcase from '../../ComponentShowcase.jsx';

const component = getComponentBySlug('tooltip');

export default function Tooltip() {
  return <ComponentShowcase component={component} />;
}
