import axios from "axios";
import { getCookie } from "typescript-cookie";
// Types
import { Order, OrderDto } from "src/store/orders";

const endpoint = `${import.meta.env.VITE_APP_API_URL}/orders`;

const ordersService = {
  bulkCreate: (orders: OrderDto[]): Promise<Order[]> =>
    new Promise((resolve, reject) => {
      axios
        .post(`${endpoint}/bulk`, orders, {
          headers: {
            Authorization: `Bearer ${getCookie("ut")}`,
          },
        })
        .then((response) => resolve(response.data))
        .catch((error) => reject(error));
    }),
};

export default ordersService;
