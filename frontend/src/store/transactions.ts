import { create as createStore } from "zustand";
import { devtools } from "zustand/middleware";
// Services
import transactionsService from "src/services/transactions/transactions.service";
// Types
import { TransactionUI } from "src/components/cards/Transaction/Transaction.types";

export type TransactionState = {
  isLoading: boolean;
  data: TransactionUI[];
  getAll: () => Promise<void>;
};

const useTransactionStore = createStore<TransactionState>()(
  devtools((set) => ({
    isLoading: false,
    data: [],
    getAll: async () => {
      set(() => ({ isLoading: true }));
      const transactions = await transactionsService.getAll();
      return set(() => ({ isLoading: false, data: transactions }));
    },
  }))
);

export default useTransactionStore;
