import { getComponentBySlug } from '../../../data/components.js';
import ComponentPageLayout from '../../../components/ComponentPageLayout.jsx';
import Card from '../../../components/material/card/Card.jsx';

const component = getComponentBySlug('card');

export default function CardPage() {
  return (
    <ComponentPageLayout component={component}>
      <Card />
    </ComponentPageLayout>
  );
}
