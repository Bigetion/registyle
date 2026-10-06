import { getComponentBySlug } from '../../../data/components.js';
import ComponentShowcase from '../../ComponentShowcase.jsx';

const component = getComponentBySlug('speed-dial');

export default function SpeedDial() {
  return <ComponentShowcase component={component} />;
}
