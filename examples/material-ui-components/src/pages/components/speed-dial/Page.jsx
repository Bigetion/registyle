import { getComponentBySlug } from '../../../data/components.js';
import ComponentPageLayout from '../../../components/ComponentPageLayout.jsx';
import SpeedDial from '../../../components/material/speed-dial/SpeedDial.jsx';

const component = getComponentBySlug('speed-dial');

export default function SpeedDialPage() {
  return (
    <ComponentPageLayout component={component}>
      <SpeedDial />
    </ComponentPageLayout>
  );
}
