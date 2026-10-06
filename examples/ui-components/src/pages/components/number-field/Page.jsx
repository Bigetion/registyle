import { getComponentBySlug } from '../../../data/components.js';
import ComponentPageLayout from '../../../components/ComponentPageLayout.jsx';
import NumberField from '../../../components/ui/number-field/NumberField.jsx';

const component = getComponentBySlug('number-field');

export default function NumberFieldPage() {
  return (
    <ComponentPageLayout component={component}>
      <NumberField />
    </ComponentPageLayout>
  );
}
