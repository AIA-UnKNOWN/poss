import axios from 'axios';
import { getCookie } from 'typescript-cookie';
// Types
import type { Product } from "src/components/cards/Product/Product.types";
import type { GetAllFilter } from 'src/store/products';

const endpoint = `${import.meta.env.VITE_APP_API_URL}/products`;

const productsService = {
  getAll: (filter?: GetAllFilter) : Promise<Product[]> => new Promise(
    (resolve, reject) => {
      axios.get(
        `${endpoint}`,
        {
          params: filter,
          headers: {
            'Authorization': `Bearer ${getCookie('ut')}`,
          }
        }
      )
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
  update: (productData: Product) : Promise<void> => new Promise(
    (resolve, reject) => {
      axios.put(
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