import { getComponentBySlug } from '../../../data/components.js';
import ComponentShowcase from '../../ComponentShowcase.jsx';

const component = getComponentBySlug('snackbar');

export default function Snackbar() {
  return <ComponentShowcase component={component} />;
}
