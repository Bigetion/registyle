import { getComponentBySlug } from '../../../data/components.js';
import ComponentPageLayout from '../../../components/ComponentPageLayout.jsx';
import Select from '../../../components/ui/select/Select.jsx';

const component = getComponentBySlug('select');

export default function SelectPage() {
  return (
    <ComponentPageLayout component={component}>
      <Select />
    </ComponentPageLayout>
  );
}
