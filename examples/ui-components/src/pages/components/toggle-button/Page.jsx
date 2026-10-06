import { getComponentBySlug } from '../../../data/components.js';
import ComponentPageLayout from '../../../components/ComponentPageLayout.jsx';
import ToggleButton from '../../../components/ui/toggle-button/ToggleButton.jsx';

const component = getComponentBySlug('toggle-button');

export default function ToggleButtonPage() {
  return (
    <ComponentPageLayout component={component}>
      <ToggleButton />
    </ComponentPageLayout>
  );
}
