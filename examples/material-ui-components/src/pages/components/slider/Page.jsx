import { getComponentBySlug } from '../../../data/components.js';
import ComponentPageLayout from '../../../components/ComponentPageLayout.jsx';
import Slider from '../../../components/material/slider/Slider.jsx';

const component = getComponentBySlug('slider');

export default function SliderPage() {
  return (
    <ComponentPageLayout component={component}>
      <Slider />
    </ComponentPageLayout>
  );
}
