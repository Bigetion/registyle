import { getComponentBySlug } from '../../../data/components.js';
import ComponentPageLayout from '../../../components/ComponentPageLayout.jsx';
import FloatingActionButton from '../../../components/material/floating-action-button/FloatingActionButton.jsx';

const component = getComponentBySlug('floating-action-button');

export default function FloatingActionButtonPage() {
  return (
    <ComponentPageLayout component={component}>
      <FloatingActionButton />
    </ComponentPageLayout>
  );
}
