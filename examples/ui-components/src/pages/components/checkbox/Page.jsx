import { getComponentBySlug } from '../../../data/components.js';
import ComponentPageLayout from '../../../components/ComponentPageLayout.jsx';
import Checkbox from '../../../components/ui/checkbox/Checkbox.jsx';

const component = getComponentBySlug('checkbox');

export default function CheckboxPage() {
  return (
    <ComponentPageLayout component={component}>
      <Checkbox />
    </ComponentPageLayout>
  );
}
