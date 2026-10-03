import { getComponentBySlug } from '../../../data/components.js';
import ComponentPageLayout from '../../../components/ComponentPageLayout.jsx';
import Pagination from '../../../components/material/pagination/Pagination.jsx';

const component = getComponentBySlug('pagination');

export default function PaginationPage() {
  return (
    <ComponentPageLayout component={component}>
      <Pagination />
    </ComponentPageLayout>
  );
}
