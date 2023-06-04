import './Product.style.scss';
import React from "react";
import type { ProductProps } from "./Product.types";
import Button from '../../Button/Button';

const Product: React.FC<ProductProps> = props => {
  const {
    product,
    view = 'default',
  } = props;
  const {
    name,
    price,
    photoUrl,
    quantity,
  } = product;

  const renderProduct = () : JSX.Element => {
    switch(view) {
      case 'order-item':
        return (
          <div className="product order-item">
            <div className='order-item-details'>
              <div className='product-image-container order-item'>
                {photoUrl && (
                  <img
                    src={photoUrl}
                    alt={name}
                  />
                )}
              </div>
              <div className='product-details order-item'>
                <span className='product-name order-item'>{name}</span>
                <span className='product-price order-item'>${price}</span>
              </div>
            </div>
            <div className='order-item-quantity-control'>
              <Button
                text='increment'
                showText={false}
                showLeftIcon={true}
                iconName='plus'
                size='sm'
              />
              <span>{quantity}</span>
              <Button
                text='decrement'
                showText={false}
                showLeftIcon={true}
                iconName='minus'
                size='sm'
              />
            </div>
          </div>
        );
      default:
        return (
          <div className="product">
            <div className='product-image-container'>
              {photoUrl && (
                <img
                  src={photoUrl}
                  alt={name}
                />
              )}
            </div>
            <div className='product-details'>
              <span className='product-name'>{name}</span>
              <span className='product-price'>${price}</span>
            </div>
          </div>
        );
    }
  }

  return renderProduct();
}

export default Product;