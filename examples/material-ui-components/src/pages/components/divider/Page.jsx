import { getComponentBySlug } from '../../../data/components.js';
import ComponentPageLayout from '../../../components/ComponentPageLayout.jsx';
import Divider from '../../../components/material/divider/Divider.jsx';

const component = getComponentBySlug('divider');

export default function DividerPage() {
  return (
    <ComponentPageLayout component={component}>
      <Divider />
    </ComponentPageLayout>
  );
}
