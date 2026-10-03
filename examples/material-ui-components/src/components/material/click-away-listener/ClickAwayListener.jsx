import { getComponentBySlug } from '../../../data/components.js';
import ComponentShowcase from '../../ComponentShowcase.jsx';

const component = getComponentBySlug('click-away-listener');

export default function ClickAwayListener() {
  return <ComponentShowcase component={component} />;
}
