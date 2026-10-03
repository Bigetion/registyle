import { getComponentBySlug } from '../../../data/components.js';
import ComponentPageLayout from '../../../components/ComponentPageLayout.jsx';
import Progress from '../../../components/material/progress/Progress.jsx';

const component = getComponentBySlug('progress');

export default function ProgressPage() {
  return (
    <ComponentPageLayout component={component}>
      <Progress />
    </ComponentPageLayout>
  );
}
