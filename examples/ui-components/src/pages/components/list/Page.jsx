import { getComponentBySlug } from '../../../data/components.js';
import ComponentPageLayout from '../../../components/ComponentPageLayout.jsx';
import List from '../../../components/ui/list/List.jsx';

const component = getComponentBySlug('list');

export default function ListPage() {
  return (
    <ComponentPageLayout component={component}>
      <List />
    </ComponentPageLayout>
  );
}
