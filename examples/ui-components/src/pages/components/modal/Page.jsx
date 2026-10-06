import { getComponentBySlug } from '../../../data/components.js';
import ComponentPageLayout from '../../../components/ComponentPageLayout.jsx';
import Modal from '../../../components/ui/modal/Modal.jsx';

const component = getComponentBySlug('modal');

export default function ModalPage() {
  return (
    <ComponentPageLayout component={component}>
      <Modal />
    </ComponentPageLayout>
  );
}
