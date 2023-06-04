export type Transaction = {
  id: number;
  totalAmount: number;
  createdDate: string;
}

export interface TransactionProps {
  transaction: Transaction;
  onClick?: (transaction: Transaction) => any;
}