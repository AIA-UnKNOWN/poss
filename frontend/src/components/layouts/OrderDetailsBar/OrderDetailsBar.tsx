import './OrderDetailsBar.style.scss';
import React from 'react';

import type { OrderDetailsBarProps } from './OrderDetailsBar.types';
import Product from 'src/components/cards/Product';
import Button from 'src/components/Button';


const OrderDetailsBar: React.FC<OrderDetailsBarProps> = props => {
  const { products } = props;

  return (
    <div className='order-details-bar'>
      <div className='order-items-container'>
        <span className='label'>Order Cart</span>
        <div className='order-items'>
          {products?.map(product => (
            <Product
              view='order-item'
              product={product}
            />
          ))}
        </div>
      </div>
      <div className='order-amount-info'>
        <div>
          Amount Info here
        </div>
        <Button
          text='Checkout'
        />
      </div>
    </div>
  );
}

export default OrderDetailsBar;