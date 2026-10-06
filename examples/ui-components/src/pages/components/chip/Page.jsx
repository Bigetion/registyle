import { getComponentBySlug } from '../../../data/components.js';
import ComponentPageLayout from '../../../components/ComponentPageLayout.jsx';
import Chip from '../../../components/ui/chip/Chip.jsx';

const component = getComponentBySlug('chip');

export default function ChipPage() {
  return (
    <ComponentPageLayout component={component}>
      <Chip />
    </ComponentPageLayout>
  );
}
