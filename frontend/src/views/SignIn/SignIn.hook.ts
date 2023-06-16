import { useState } from "react";

const useSignIn = () => {
  const [form, setForm] = useState({
    username: '',
    password: '',
  });

  const handleChange = (name: string, value: any) => {
    setForm(form => ({
      ...form,
      [name]: value,
    }));
  }

  return {
    form,
    handleChange,
  }
}

export default useSignIn;