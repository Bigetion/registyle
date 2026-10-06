import { getComponentBySlug } from '../../../data/components.js';
import ComponentPageLayout from '../../../components/ComponentPageLayout.jsx';
import Breadcrumbs from '../../../components/ui/breadcrumbs/Breadcrumbs.jsx';

const component = getComponentBySlug('breadcrumbs');

export default function BreadcrumbsPage() {
  return (
    <ComponentPageLayout component={component}>
      <Breadcrumbs />
    </ComponentPageLayout>
  );
}
