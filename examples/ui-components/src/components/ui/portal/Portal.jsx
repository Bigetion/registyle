import { getComponentBySlug } from '../../../data/components.js';
import ComponentShowcase from '../../ComponentShowcase.jsx';

const component = getComponentBySlug('portal');

export default function Portal() {
  return <ComponentShowcase component={component} />;
}
