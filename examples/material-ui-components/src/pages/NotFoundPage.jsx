import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div className="content-width not-found">
      <p className="component-count">404 / PAGE NOT FOUND</p>
      <h1 className="page-heading">This component does not exist.</h1>
      <Link className="mui-button mui-button-contained" to="/components/autocomplete">
        Browse components
      </Link>
    </div>
  );
}
