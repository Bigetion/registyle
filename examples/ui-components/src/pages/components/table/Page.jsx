import { getComponentBySlug } from '../../../data/components.js';
import ComponentPageLayout from '../../../components/ComponentPageLayout.jsx';
import Table from '../../../components/ui/table/Table.jsx';

const component = getComponentBySlug('table');

export default function TablePage() {
  return (
    <ComponentPageLayout component={component}>
      <Table />
    </ComponentPageLayout>
  );
}
