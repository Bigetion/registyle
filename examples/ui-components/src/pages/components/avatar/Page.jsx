import { getComponentBySlug } from '../../../data/components.js';
import ComponentPageLayout from '../../../components/ComponentPageLayout.jsx';
import Avatar from '../../../components/ui/avatar/Avatar.jsx';

const component = getComponentBySlug('avatar');

export default function AvatarPage() {
  return (
    <ComponentPageLayout component={component}>
      <Avatar />
    </ComponentPageLayout>
  );
}
