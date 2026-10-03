import { getComponentBySlug } from '../../../data/components.js';
import ComponentPageLayout from '../../../components/ComponentPageLayout.jsx';
import BottomNavigation from '../../../components/material/bottom-navigation/BottomNavigation.jsx';

const component = getComponentBySlug('bottom-navigation');

export default function BottomNavigationPage() {
  return (
    <ComponentPageLayout component={component}>
      <BottomNavigation />
    </ComponentPageLayout>
  );
}
