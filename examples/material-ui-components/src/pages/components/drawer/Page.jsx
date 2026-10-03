import { getComponentBySlug } from '../../../data/components.js';
import ComponentPageLayout from '../../../components/ComponentPageLayout.jsx';
import Drawer from '../../../components/material/drawer/Drawer.jsx';

const component = getComponentBySlug('drawer');

export default function DrawerPage() {
  return (
    <ComponentPageLayout component={component}>
      <Drawer />
    </ComponentPageLayout>
  );
}
