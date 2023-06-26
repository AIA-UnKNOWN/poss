import axios from 'axios';
import { getCookie } from 'typescript-cookie';
// Types
import type { Category } from 'src/store/categories';

const endpoint = `${import.meta.env.VITE_APP_API_URL}/categories`;

const categoriesService = {
  getAll: () : Promise<Category[]> => new Promise(
    (resolve, reject) => {
      axios.get(`${endpoint}`, {
        headers: {
          'Authorization': `Bearer ${getCookie('ut')}`,
        }
      })
        .then(response => resolve(response.data))
        .catch(error => reject(error));
    }
  ),
  create: (categoryName: string) : Promise<Category> => new Promise(
    (resolve, reject) => {
      axios.post(
        `${endpoint}`,
        { name: categoryName },
        {
          headers: {
            'Authorization': `Bearer ${getCookie('ut')}`,
          },
        }
      )
        .then(response => resolve(response.data))
        .catch(error => reject(error));
    }
  ),
}

export default categoriesService;