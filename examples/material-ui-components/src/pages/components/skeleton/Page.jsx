import { getComponentBySlug } from '../../../data/components.js';
import ComponentPageLayout from '../../../components/ComponentPageLayout.jsx';
import Skeleton from '../../../components/material/skeleton/Skeleton.jsx';

const component = getComponentBySlug('skeleton');

export default function SkeletonPage() {
  return (
    <ComponentPageLayout component={component}>
      <Skeleton />
    </ComponentPageLayout>
  );
}
