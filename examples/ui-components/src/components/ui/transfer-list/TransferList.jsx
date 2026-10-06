import { getComponentBySlug } from '../../../data/components.js';
import ComponentShowcase from '../../ComponentShowcase.jsx';

const component = getComponentBySlug('transfer-list');

export default function TransferList() {
  return <ComponentShowcase component={component} />;
}
