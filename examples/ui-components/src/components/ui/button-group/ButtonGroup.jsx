import { getComponentBySlug } from '../../../data/components.js';
import ComponentShowcase from '../../ComponentShowcase.jsx';

const component = getComponentBySlug('button-group');

export default function ButtonGroup() {
  return <ComponentShowcase component={component} />;
}
