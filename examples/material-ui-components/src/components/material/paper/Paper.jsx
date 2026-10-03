import { getComponentBySlug } from '../../../data/components.js';
import ComponentShowcase from '../../ComponentShowcase.jsx';

const component = getComponentBySlug('paper');

export default function Paper() {
  return <ComponentShowcase component={component} />;
}
