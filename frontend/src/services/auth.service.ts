import axios from 'axios';

const endpoint = `${import.meta.env.VITE_APP_API_URL}/auth`;

export type SignInData = {
  username: string;
  password: string;
}

export type SignUpData = SignInData & {
  email: string;
  confirmPassword: string;
}

const authService = {
  signIn: (data: SignInData) => new Promise(
    (resolve, reject) => {
      axios.post(`${endpoint}/signIn`, data)
        .then(response => resolve(response.data))
        .catch(error => reject(error));
    }
  ),
  signUp: (data: SignUpData) => new Promise(
    (resolve, reject) => {
      axios.post(`${endpoint}/signUp`, data)
        .then(response => resolve(response.data))
        .catch(error => reject(error));
    }
  ),
};

export default authService;