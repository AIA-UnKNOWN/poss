import './OrderDetailsBar.style.scss';
import React from 'react';
// Types
import type { OrderDetailsBarProps } from './OrderDetailsBar.types';
// Components
import Product from 'src/components/cards/Product';
import Button from 'src/components/Button';
import SalesInfo from 'src/components/cards/SalesInfo/SalesInfo';
import EmptyState from 'src/components/cards/EmptyState';
import Input from 'src/components/Input/Input';


const OrderDetailsBar: React.FC<OrderDetailsBarProps> = props => {
  const { products } = props;
  const subtotal = products.reduce(
    (initialAmount, product) => initialAmount + (product.price * product.quantity),
    0
  );

  return (
    <div className='order-details-bar'>
      <div className='order-items-container'>
        <span className='label'>Order Cart</span>
        {products.length > 0 ? (
          <div className='order-items'>
            <div className='order-cart-actions-container'>
              <Input
                type='checkbox'
              />
              <div className='order-cart-actions'>
                <Button
                  text='Remove'
                  size='sm'
                />
              </div>
            </div>
            {products?.map((product, i) => (
              <Product
                key={i}
                view='order-item'
                product={product}
              />
            ))}
          </div>
        ) : (
          <EmptyState
            text='No items in your cart.'
            className='order-cart-items-empty-state'
          />
        )}
      </div>
      <div className='order-amount-info'>
        <div className='sales-info-container'>
          <SalesInfo subTotal={subtotal} />
        </div>
        <Button
          text='Checkout'
        />
      </div>
    </div>
  );
}

export default OrderDetailsBar;