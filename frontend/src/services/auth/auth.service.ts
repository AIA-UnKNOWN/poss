import axios from 'axios';
import { getCookie } from 'typescript-cookie';
// Types
import type {
  SignInData,
  SignUpData,
} from './auth.service.types';
import type {
  User,
} from 'src/store/user';

const endpoint = `${import.meta.env.VITE_APP_API_URL}/auth`;

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
  getCurrentUser: () : Promise<User> => new Promise(
    (resolve, reject) => {
      axios.get(`${endpoint}/user`, {
        headers: {
          'Authorization': `Bearer ${getCookie('ut')}`
        },
      })
        .then(response => resolve(response.data))
        .catch(error => reject(error));
    }
  ),
};

export default authService;