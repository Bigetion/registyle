import { getComponentBySlug } from '../../../data/components.js';
import ComponentShowcase from '../../ComponentShowcase.jsx';

const component = getComponentBySlug('autocomplete');

export default function Autocomplete() {
  return <ComponentShowcase component={component} />;
}
