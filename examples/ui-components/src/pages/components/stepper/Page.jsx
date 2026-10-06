import { getComponentBySlug } from '../../../data/components.js';
import ComponentPageLayout from '../../../components/ComponentPageLayout.jsx';
import Stepper from '../../../components/ui/stepper/Stepper.jsx';

const component = getComponentBySlug('stepper');

export default function StepperPage() {
  return (
    <ComponentPageLayout component={component}>
      <Stepper />
    </ComponentPageLayout>
  );
}
