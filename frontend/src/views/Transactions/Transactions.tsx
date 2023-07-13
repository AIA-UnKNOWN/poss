import "./Transactions.style.scss";
import { useEffect } from "react";
// Components
import Input from "src/components/Input/Input";
import EmptyState from "src/components/cards/EmptyState/EmptyState";
import Transaction from "src/components/cards/Transaction";
// Store
import useTransactionStore from "src/store/transactions";

const Transactions = () => {
  const transactionsStore = useTransactionStore();
  const transactions = transactionsStore.data;

  useEffect(() => {
    transactionsStore.getAll();
  }, []);

  return (
    <div className="transactions">
      <Input
        placeholder="Search product name, code, or category"
        onChange={({ target: { value } }) => console.log(value)}
      />
      {transactionsStore.isLoading ? (
        <h1>Loading transactions...</h1>
      ) : (
        <div className="transactions-trxs">
          {transactions.length > 0 ? (
            transactions.map((transaction) => (
              <Transaction
                key={transaction.id}
                transaction={transaction}
                onClick={(transaction) =>
                  console.log(`Clicked transaction #${transaction.id}`)
                }
              />
            ))
          ) : (
            <EmptyState text="No transactions available" />
          )}
        </div>
      )}
    </div>
  );
};

export default Transactions;
