import './Transactions.style.scss';

// Components
import Input from "src/components/Input/Input";
import Transaction from 'src/components/cards/Transaction';

const Transactions = props => {

  return (
    <div className='transactions'>
      <Input
        placeholder="Search product name, code, or category"
        onChange={({ target: { value } }) => console.log(value)}
      />
      <div className='transactions-trxs'>
        {new Array(50).fill(null).map((_, i) => (
          <Transaction
            key={i}
            transaction={{
              id: i,
              totalAmount: 199 * i,
              createdDate: new Date().toLocaleDateString(),
            }}
            onClick={transaction =>console.log(`Clicked transaction #${transaction.id}`)}
          />
        ))}
      </div>
    </div>
  )
}

export default Transactions;