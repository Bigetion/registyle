import { getComponentBySlug } from '../../../data/components.js';
import ComponentPageLayout from '../../../components/ComponentPageLayout.jsx';
import Autocomplete from '../../../components/ui/autocomplete/Autocomplete.jsx';

const component = getComponentBySlug('autocomplete');

export default function AutocompletePage() {
  return (
    <ComponentPageLayout component={component}>
      <Autocomplete />
    </ComponentPageLayout>
  );
}
