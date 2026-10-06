import { getComponentBySlug } from '../../../data/components.js';
import ComponentPageLayout from '../../../components/ComponentPageLayout.jsx';
import Dialog from '../../../components/ui/dialog/Dialog.jsx';

const component = getComponentBySlug('dialog');

export default function DialogPage() {
  return (
    <ComponentPageLayout component={component}>
      <Dialog />
    </ComponentPageLayout>
  );
}
