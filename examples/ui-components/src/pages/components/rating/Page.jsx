import { getComponentBySlug } from '../../../data/components.js';
import ComponentPageLayout from '../../../components/ComponentPageLayout.jsx';
import Rating from '../../../components/ui/rating/Rating.jsx';

const component = getComponentBySlug('rating');

export default function RatingPage() {
  return (
    <ComponentPageLayout component={component}>
      <Rating />
    </ComponentPageLayout>
  );
}
