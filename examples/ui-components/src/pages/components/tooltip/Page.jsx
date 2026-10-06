import { getComponentBySlug } from '../../../data/components.js';
import ComponentPageLayout from '../../../components/ComponentPageLayout.jsx';
import Tooltip from '../../../components/ui/tooltip/Tooltip.jsx';

const component = getComponentBySlug('tooltip');

export default function TooltipPage() {
  return (
    <ComponentPageLayout component={component}>
      <Tooltip />
    </ComponentPageLayout>
  );
}
