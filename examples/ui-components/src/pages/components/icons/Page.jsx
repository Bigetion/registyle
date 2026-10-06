import { getComponentBySlug } from '../../../data/components.js';
import ComponentPageLayout from '../../../components/ComponentPageLayout.jsx';
import Icons from '../../../components/ui/icons/Icons.jsx';

const component = getComponentBySlug('icons');

export default function IconsPage() {
  return (
    <ComponentPageLayout component={component}>
      <Icons />
    </ComponentPageLayout>
  );
}
