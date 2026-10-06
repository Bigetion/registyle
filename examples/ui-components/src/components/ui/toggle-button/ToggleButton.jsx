import { getComponentBySlug } from '../../../data/components.js';
import ComponentShowcase from '../../ComponentShowcase.jsx';

const component = getComponentBySlug('toggle-button');

export default function ToggleButton() {
  return <ComponentShowcase component={component} />;
}
