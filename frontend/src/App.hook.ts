import { useEffect, useState } from 'react';
import { getCookie } from 'typescript-cookie';

const useApp = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const hasCookie = checkIfHasCookie();
    setIsAuthenticated(hasCookie);
  }, []);

  const checkIfHasCookie = () : boolean => {
    if (getCookie('ut')) return true;
    redirectBackToSignInPage();
    return false;
  }

  const redirectBackToSignInPage = () => {
    location.href = '/signin';
  }

  return {
    isAuthenticated,
  }
}

export default useApp;