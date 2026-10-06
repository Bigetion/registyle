import { getComponentBySlug } from '../../../data/components.js';
import ComponentShowcase from '../../ComponentShowcase.jsx';

const component = getComponentBySlug('icon-glyph');

export default function IconGlyph() {
  return <ComponentShowcase component={component} />;
}
