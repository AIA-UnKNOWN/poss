import './App.scss';
import { Suspense, lazy } from 'react';

// Components
import FullLayout from './components/layouts/FullLayout/FullLayout';
// Store
import useNavigationStore, { PageName } from './store/navigation';
import useUserStore from './store/user';
// Views
const Inventory = lazy(() => import('./views/Inventory/Inventory'));
const Transactions = lazy(() => import('./views/Transactions/Transactions'));


function App() {
  const { isAuthenticated } = useUserStore();
  const { pageName } = useNavigationStore();

  const renderContent = (pageName: PageName) => {
    switch (pageName) {
      case PageName.TRANSACTIONS:
        return <Transactions />;
      case PageName.INVENTORY:
        return <Inventory />;
    }
  }

  if (!isAuthenticated) {
    location.href = '/signin';
    return null;
  }

  return (
    <FullLayout>
      <Suspense fallback={(<h1>Loading...</h1>)}>
        {renderContent(pageName)}
      </Suspense>
    </FullLayout>
  )
}

export default App
