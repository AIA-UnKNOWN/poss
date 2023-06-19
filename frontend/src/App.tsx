import './App.scss';
import { Suspense, lazy } from 'react';

// Hooks
import useApp from './App.hook';
// Components
import FullLayout from './components/layouts/FullLayout/FullLayout';
// Store
import useNavigationStore, { PageName } from './store/navigation';
// Views
const Inventory = lazy(() => import('./views/Inventory/Inventory'));
const Transactions = lazy(() => import('./views/Transactions/Transactions'));


function App() {
  const { pageName } = useNavigationStore();
  const { isAuthenticated } = useApp();

  const renderContent = (pageName: PageName) => {
    switch (pageName) {
      case PageName.TRANSACTIONS:
        return <Transactions />;
      case PageName.INVENTORY:
        return <Inventory />;
    }
  }

  return isAuthenticated ? (
    <FullLayout>
      <Suspense fallback={(<h1>Loading...</h1>)}>
        {renderContent(pageName)}
      </Suspense>
    </FullLayout>
  ) : null;
}

export default App
