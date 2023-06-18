import './OrderDetailsBar.style.scss';
import React from 'react';

import type { OrderDetailsBarProps } from './OrderDetailsBar.types';
import Product from 'src/components/cards/Product';
import Button from 'src/components/Button';
import SalesInfo from 'src/components/cards/SalesInfo/SalesInfo';


const OrderDetailsBar: React.FC<OrderDetailsBarProps> = props => {
  const { products } = props;

  return (
    <div className='order-details-bar'>
      <div className='order-items-container'>
        <span className='label'>Order Cart</span>
        <div className='order-items'>
          {products?.map((product, i) => (
            <Product
              key={i}
              view='order-item'
              product={product}
            />
          ))}
        </div>
      </div>
      <div className='order-amount-info'>
        <div className='sales-info-container'>
          <SalesInfo subTotal={150} />
        </div>
        <Button
          text='Checkout'
        />
      </div>
    </div>
  );
}

export default OrderDetailsBar;