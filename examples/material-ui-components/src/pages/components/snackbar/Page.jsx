import { getComponentBySlug } from '../../../data/components.js';
import ComponentPageLayout from '../../../components/ComponentPageLayout.jsx';
import Snackbar from '../../../components/material/snackbar/Snackbar.jsx';

const component = getComponentBySlug('snackbar');

export default function SnackbarPage() {
  return (
    <ComponentPageLayout component={component}>
      <Snackbar />
    </ComponentPageLayout>
  );
}
