import { getComponentBySlug } from '../../../data/components.js';
import ComponentPageLayout from '../../../components/ComponentPageLayout.jsx';
import MaterialIcons from '../../../components/material/material-icons/MaterialIcons.jsx';

const component = getComponentBySlug('material-icons');

export default function MaterialIconsPage() {
  return (
    <ComponentPageLayout component={component}>
      <MaterialIcons />
    </ComponentPageLayout>
  );
}
