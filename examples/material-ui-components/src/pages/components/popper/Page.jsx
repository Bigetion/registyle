import { getComponentBySlug } from '../../../data/components.js';
import ComponentPageLayout from '../../../components/ComponentPageLayout.jsx';
import Popper from '../../../components/material/popper/Popper.jsx';

const component = getComponentBySlug('popper');

export default function PopperPage() {
  return (
    <ComponentPageLayout component={component}>
      <Popper />
    </ComponentPageLayout>
  );
}
