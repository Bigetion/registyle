import { getComponentBySlug } from '../../../data/components.js';
import ComponentPageLayout from '../../../components/ComponentPageLayout.jsx';
import Button from '../../../components/ui/button/Button.jsx';

const component = getComponentBySlug('button');

export default function ButtonPage() {
  return (
    <ComponentPageLayout component={component}>
      <Button />
    </ComponentPageLayout>
  );
}
