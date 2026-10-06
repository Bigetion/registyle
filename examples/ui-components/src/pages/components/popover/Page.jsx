import { getComponentBySlug } from '../../../data/components.js';
import ComponentPageLayout from '../../../components/ComponentPageLayout.jsx';
import Popover from '../../../components/ui/popover/Popover.jsx';

const component = getComponentBySlug('popover');

export default function PopoverPage() {
  return (
    <ComponentPageLayout component={component}>
      <Popover />
    </ComponentPageLayout>
  );
}
