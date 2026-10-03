import { getComponentBySlug } from '../../../data/components.js';
import ComponentPageLayout from '../../../components/ComponentPageLayout.jsx';
import AppBar from '../../../components/material/app-bar/AppBar.jsx';

const component = getComponentBySlug('app-bar');

export default function AppBarPage() {
  return (
    <ComponentPageLayout component={component}>
      <AppBar />
    </ComponentPageLayout>
  );
}
