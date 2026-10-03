import { getComponentBySlug } from '../../../data/components.js';
import ComponentPageLayout from '../../../components/ComponentPageLayout.jsx';
import Menu from '../../../components/material/menu/Menu.jsx';

const component = getComponentBySlug('menu');

export default function MenuPage() {
  return (
    <ComponentPageLayout component={component}>
      <Menu />
    </ComponentPageLayout>
  );
}
