import axios from "axios";
import { getCookie } from "typescript-cookie";
// Types
import { TransactionUI } from "src/components/cards/Transaction/Transaction.types";
import { TransactionDto } from "src/store/transactions";

const endpoint = `${import.meta.env.VITE_APP_API_URL}/transactions`;

const transactionsService = {
  getAll: (): Promise<TransactionUI[]> =>
    new Promise((resolve, reject) => {
      axios
        .get(`${endpoint}`, {
          headers: {
            Authorization: `Bearer ${getCookie("ut")}`,
          },
        })
        .then((response) => resolve(response.data))
        .catch((error) => reject(error));
    }),
  create: (transactionData: TransactionDto): Promise<TransactionUI> =>
    new Promise((resolve, reject) => {
      axios
        .post(`${endpoint}`, transactionData, {
          headers: {
            Authorization: `Bearer ${getCookie("ut")}`,
          },
        })
        .then((response) => resolve(response.data))
        .catch((error) => reject(error));
    }),
};

export default transactionsService;
