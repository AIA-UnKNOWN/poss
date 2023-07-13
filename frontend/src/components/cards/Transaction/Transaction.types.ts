export type TransactionUI = {
  id: number;
  totalAmount: number;
  amountReceived: number;
  amountChange: number;
  userId: number;
  updatedDate: Date | string;
  createdDate: Date | string;
};
export interface TransactionProps {
  transaction: TransactionUI;
  onClick?: (transaction: TransactionUI) => any;
}
