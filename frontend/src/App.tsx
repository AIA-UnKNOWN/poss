import './App.scss';
import { Suspense, lazy } from 'react';

// Components
import FullLayout from './components/layouts/FullLayout/FullLayout';
import Transactions from './views/Transactions/Transactions';
// Store
import useNavigationStore, { PageName } from './store/navigation';
// Views
const Inventory = lazy(() => import('./views/Inventory/Inventory'));


function App() {
  const { pageName } = useNavigationStore();

  const renderContent = (pageName: PageName) => {
    switch (pageName) {
      case PageName.TRANSACTIONS:
        return <Transactions />;
      case PageName.INVENTORY:
        return <Inventory />;
    }
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
