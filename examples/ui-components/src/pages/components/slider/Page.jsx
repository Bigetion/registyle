import { getComponentBySlug } from '../../../data/components.js';
import ComponentPageLayout from '../../../components/ComponentPageLayout.jsx';
import Slider from '../../../components/ui/slider/Slider.jsx';

const component = getComponentBySlug('slider');

export default function SliderPage() {
  return (
    <ComponentPageLayout component={component}>
      <Slider />
    </ComponentPageLayout>
  );
}
