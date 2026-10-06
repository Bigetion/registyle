import { getComponentBySlug } from '../../../data/components.js';
import ComponentShowcase from '../../ComponentShowcase.jsx';

const component = getComponentBySlug('breadcrumbs');

export default function Breadcrumbs() {
  return <ComponentShowcase component={component} />;
}
