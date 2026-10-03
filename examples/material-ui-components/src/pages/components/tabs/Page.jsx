import { getComponentBySlug } from '../../../data/components.js';
import ComponentPageLayout from '../../../components/ComponentPageLayout.jsx';
import Tabs from '../../../components/material/tabs/Tabs.jsx';

const component = getComponentBySlug('tabs');

export default function TabsPage() {
  return (
    <ComponentPageLayout component={component}>
      <Tabs />
    </ComponentPageLayout>
  );
}
