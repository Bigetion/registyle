import { getComponentBySlug } from '../../../data/components.js';
import ComponentPageLayout from '../../../components/ComponentPageLayout.jsx';
import Alert from '../../../components/ui/alert/Alert.jsx';

const component = getComponentBySlug('alert');

export default function AlertPage() {
  return (
    <ComponentPageLayout component={component}>
      <Alert />
    </ComponentPageLayout>
  );
}
