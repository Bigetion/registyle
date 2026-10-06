import { getComponentBySlug } from '../../../data/components.js';
import ComponentPageLayout from '../../../components/ComponentPageLayout.jsx';
import TextField from '../../../components/ui/text-field/TextField.jsx';

const component = getComponentBySlug('text-field');

export default function TextFieldPage() {
  return (
    <ComponentPageLayout component={component}>
      <TextField />
    </ComponentPageLayout>
  );
}
