import { getComponentBySlug } from '../../../data/components.js';
import ComponentPageLayout from '../../../components/ComponentPageLayout.jsx';
import ButtonGroup from '../../../components/material/button-group/ButtonGroup.jsx';

const component = getComponentBySlug('button-group');

export default function ButtonGroupPage() {
  return (
    <ComponentPageLayout component={component}>
      <ButtonGroup />
    </ComponentPageLayout>
  );
}
