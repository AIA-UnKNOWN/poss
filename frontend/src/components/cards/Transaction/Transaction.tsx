import './Transaction.style.scss';
import React from "react";
import type { TransactionProps } from "./Transaction.types";


const Transaction: React.FC<TransactionProps> = props => {
  const {
    transaction,
    onClick,
  } = props;
  const {
    id,
    totalAmount,
    createdDate,
  } = transaction;

  return (
    <div
      className="transaction"
      onClick={() => onClick?.(transaction)}
    >
      <div className='transaction-details'>
        <div className="details">
          <span className="transaction-id">
            #{id}
          </span>
          <span className="transaction-owner">
            Customer #{id}
          </span>
        </div>
        <span className="transaction-date">
          {createdDate}
        </span>
      </div>
      <span className="transaction-total-amount">
        ${totalAmount}
      </span>
    </div>
  );
}

export default Transaction;