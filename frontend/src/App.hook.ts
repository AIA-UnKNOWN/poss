import { useEffect, useState } from 'react';
import { getCookie } from 'typescript-cookie';
// Store
import useUserStore from './store/user';

const useApp = () => {
  const userStore = useUserStore();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    if (!getCookie('ut')) {
      redirectBackToSignInPage();
      return;
    }
    getCurrentUser();
  }, []);

  const getCurrentUser = async () : Promise<void> => {
    const hasUser = await userStore.getCurrentUser();
    console.log({ hasUser });
    if (!hasUser) redirectBackToSignInPage();
    setIsAuthenticated(hasUser);
  }

  const redirectBackToSignInPage = () => {
    location.href = '/signin';
  }

  return {
    isAuthenticated,
  }
}

export default useApp;