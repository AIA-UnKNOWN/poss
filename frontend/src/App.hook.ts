import { useEffect, useState } from 'react';
import { getCookie } from 'typescript-cookie';
// Store
import useUserStore from './store/user';

const useApp = () => {
  const userStore = useUserStore();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const hasCookie = checkIfHasCookie();
    if (hasCookie) getCurrentUser();
  }, []);

  const checkIfHasCookie = () : boolean => {
    if (getCookie('ut')) return true;
    redirectBackToSignInPage();
    return false;
  }

  const getCurrentUser = async () : Promise<void> => {
    const hasUser = await userStore.getCurrentUser();
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