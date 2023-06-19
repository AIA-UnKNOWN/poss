import { useState } from "react";
import { setCookie } from "typescript-cookie";

// Services
import authService from "src/services/auth";

const useSignIn = () => {
  const [form, setForm] = useState({
    username: '',
    password: '',
  });
  const [formError, setFormError] = useState({
    username: '',
    password: '',
  });
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (name: string, value: any) => {
    setForm(form => ({
      ...form,
      [name]: value,
    }));
  }

  const signIn = async ({ username, password }: { username: string; password: string; }) => {
    setIsLoading(true);
    try {
      const { accessToken } = await authService.signIn({ username, password });
      setCookie('ut', accessToken);
      setIsAuthenticated(true);
      location.href = '/';
    } catch(error) {
      console.log('SIGNIN_ERROR', error);
      setFormError(() => ({ ...error.response.data.error }));
      setIsAuthenticated(!error.response.data.error ? false : null);
    }
    setIsLoading(false);
  }

  return {
    form,
    formError,
    isAuthenticated,
    isLoading,
    handleChange,
    signIn,
  }
}

export default useSignIn;