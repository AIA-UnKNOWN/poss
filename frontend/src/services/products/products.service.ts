import axios from 'axios';
import { getCookie } from 'typescript-cookie';
// Types
import type { Product } from "src/components/cards/Product/Product.types";

const endpoint = `${import.meta.env.VITE_APP_API_URL}/products`;

const productsService = {
  getAll: () : Promise<Product[]> => new Promise(
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
  create: (productData: Product | FormData) : Promise<Product> => new Promise(
    (resolve, reject) => {
      axios.post(
        `${endpoint}`,
        productData,
        {
          headers: {
            'Authorization': `Bearer ${getCookie('ut')}`,
          }
        }
      )
        .then(response => resolve(response.data))
        .catch(error => reject(error));
    }
  ),
}

export default productsService;