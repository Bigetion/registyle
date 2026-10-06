import { getComponentBySlug } from '../../../data/components.js';
import ComponentPageLayout from '../../../components/ComponentPageLayout.jsx';
import Link from '../../../components/ui/link/Link.jsx';

const component = getComponentBySlug('link');

export default function LinkPage() {
  return (
    <ComponentPageLayout component={component}>
      <Link />
    </ComponentPageLayout>
  );
}
