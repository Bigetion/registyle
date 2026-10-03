import { getComponentBySlug } from '../../../data/components.js';
import ComponentPageLayout from '../../../components/ComponentPageLayout.jsx';
import Switch from '../../../components/material/switch/Switch.jsx';

const component = getComponentBySlug('switch');

export default function SwitchPage() {
  return (
    <ComponentPageLayout component={component}>
      <Switch />
    </ComponentPageLayout>
  );
}
