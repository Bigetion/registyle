import { getComponentBySlug } from '../../../data/components.js';
import ComponentShowcase from '../../ComponentShowcase.jsx';

const component = getComponentBySlug('skeleton');

export default function Skeleton() {
  return <ComponentShowcase component={component} />;
}
