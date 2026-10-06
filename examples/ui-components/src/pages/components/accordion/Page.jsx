import { getComponentBySlug } from '../../../data/components.js';
import ComponentPageLayout from '../../../components/ComponentPageLayout.jsx';
import Accordion from '../../../components/ui/accordion/Accordion.jsx';

const component = getComponentBySlug('accordion');

export default function AccordionPage() {
  return (
    <ComponentPageLayout component={component}>
      <Accordion />
    </ComponentPageLayout>
  );
}
