import { getComponentBySlug } from '../../../data/components.js';
import ComponentPageLayout from '../../../components/ComponentPageLayout.jsx';
import RadioGroup from '../../../components/material/radio-group/RadioGroup.jsx';

const component = getComponentBySlug('radio-group');

export default function RadioGroupPage() {
  return (
    <ComponentPageLayout component={component}>
      <RadioGroup />
    </ComponentPageLayout>
  );
}
