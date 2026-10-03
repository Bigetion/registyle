import { getComponentBySlug } from '../../../data/components.js';
import ComponentPageLayout from '../../../components/ComponentPageLayout.jsx';
import Portal from '../../../components/material/portal/Portal.jsx';

const component = getComponentBySlug('portal');

export default function PortalPage() {
  return (
    <ComponentPageLayout component={component}>
      <Portal />
    </ComponentPageLayout>
  );
}
