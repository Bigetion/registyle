import { getComponentBySlug } from '../../../data/components.js';
import ComponentPageLayout from '../../../components/ComponentPageLayout.jsx';
import ClickAwayListener from '../../../components/ui/click-away-listener/ClickAwayListener.jsx';

const component = getComponentBySlug('click-away-listener');

export default function ClickAwayListenerPage() {
  return (
    <ComponentPageLayout component={component}>
      <ClickAwayListener />
    </ComponentPageLayout>
  );
}
