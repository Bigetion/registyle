import { getComponentBySlug } from '../../../data/components.js';
import ComponentPageLayout from '../../../components/ComponentPageLayout.jsx';
import Paper from '../../../components/material/paper/Paper.jsx';

const component = getComponentBySlug('paper');

export default function PaperPage() {
  return (
    <ComponentPageLayout component={component}>
      <Paper />
    </ComponentPageLayout>
  );
}
