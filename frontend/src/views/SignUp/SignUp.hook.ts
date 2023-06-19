import { useState } from "react";

// Services
import authService from "src/services/auth";

const useSignUp = () => {
  const [form, setForm] = useState({
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
  });
  const [formErrors, setFormErrors] = useState<string[]>([]);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (name: string, value: any) => {
    setForm(form => ({
      ...form,
      [name]: value,
    }));
  }

  const signUp = async () => {
    setIsLoading(true);
    try {
      await authService.signUp({
        email: form.email,
        username: form.username,
        password: form.password,
        confirmPassword: form.confirmPassword,
      });
      setIsAuthenticated(true);
      location.href = '/signin';
    } catch(error) {
      console.log('SIGNUN_ERROR', error);
      setFormErrors(() => [...error.response.data.message]);
      setIsAuthenticated(false);
    }
    setIsLoading(false);
  }

  return {
    form,
    formErrors,
    isAuthenticated,
    isLoading,
    handleChange,
    signUp,
  }
}

export default useSignUp;