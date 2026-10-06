import { getComponentBySlug } from '../../../data/components.js';
import ComponentPageLayout from '../../../components/ComponentPageLayout.jsx';
import Badge from '../../../components/ui/badge/Badge.jsx';

const component = getComponentBySlug('badge');

export default function BadgePage() {
  return (
    <ComponentPageLayout component={component}>
      <Badge />
    </ComponentPageLayout>
  );
}
