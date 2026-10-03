import { getComponentBySlug } from '../../../data/components.js';
import ComponentPageLayout from '../../../components/ComponentPageLayout.jsx';
import TransferList from '../../../components/material/transfer-list/TransferList.jsx';

const component = getComponentBySlug('transfer-list');

export default function TransferListPage() {
  return (
    <ComponentPageLayout component={component}>
      <TransferList />
    </ComponentPageLayout>
  );
}
