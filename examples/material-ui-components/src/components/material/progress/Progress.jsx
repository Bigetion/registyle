import { getComponentBySlug } from '../../../data/components.js';
import ComponentShowcase from '../../ComponentShowcase.jsx';

const component = getComponentBySlug('progress');

export default function Progress() {
  return <ComponentShowcase component={component} />;
}
