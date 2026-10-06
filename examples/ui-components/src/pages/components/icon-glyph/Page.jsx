import { getComponentBySlug } from '../../../data/components.js';
import ComponentPageLayout from '../../../components/ComponentPageLayout.jsx';
import IconGlyph from '../../../components/ui/icon-glyph/IconGlyph.jsx';

const component = getComponentBySlug('icon-glyph');

export default function IconGlyphPage() {
  return (
    <ComponentPageLayout component={component}>
      <IconGlyph />
    </ComponentPageLayout>
  );
}
