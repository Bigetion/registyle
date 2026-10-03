import { getComponentBySlug } from '../../../data/components.js';
import ComponentPageLayout from '../../../components/ComponentPageLayout.jsx';
import Typography from '../../../components/material/typography/Typography.jsx';

const component = getComponentBySlug('typography');

export default function TypographyPage() {
  return (
    <ComponentPageLayout component={component}>
      <Typography />
    </ComponentPageLayout>
  );
}
