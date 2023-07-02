import './Product.style.scss';
import React from "react";
import type { ProductProps } from "./Product.types";
import Button from '../../Button/Button';
import useProduct from './Product.hook';

const Product: React.FC<ProductProps> = props => {
  const {
    product,
    view = 'default',
    onIncrement,
    onDecrement,
  } = props;
  const {
    name,
    price,
    photoUrl,
    quantity,
  } = product;
  const {
    // States
    productQuantity,
    imageUrl,
    // Functions
    incrementQuantity,
    decrementQuantity,
  } = useProduct({ photoUrl, quantity, onIncrement, onDecrement });

  const renderProduct = () : JSX.Element => {
    switch(view) {
      case 'order-item':
        return (
          <div className="product order-item">
            <div className='order-item-details'>
              <div className='product-image-container order-item'>
                <img
                  src={imageUrl}
                  alt={name || "No Image"}
                />
              </div>
              <div className='product-details order-item'>
                <span className='product-name order-item'>{name}</span>
                <span className='product-price order-item'>${price}</span>
              </div>
            </div>
            <div className='order-item-quantity-control'>
              <Button
                text='decrement'
                showText={false}
                showLeftIcon={true}
                iconName='minus'
                size='sm'
                onClick={decrementQuantity}
              />
              <span className='product-quantity'>{productQuantity}</span>
              <Button
                text='increment'
                showText={false}
                showLeftIcon={true}
                iconName='plus'
                size='sm'
                onClick={incrementQuantity}
              />
            </div>
          </div>
        );
      default:
        return (
          <div className="product">
            <div className='product-image-container'>
              <img
                src={imageUrl}
                alt={name || "No Image"}
              />
            </div>
            <div className='product-details-container'>
              <div className='product-details'>
                <span className='product-name'>{name}</span>
                <span className='product-price'>${price}</span>
              </div>
              <Button
                text='Add to cart'
                showText={false}
                showLeftIcon={true}
                iconName='cart-shopping'
              />
            </div>
          </div>
        );
    }
  }

  return renderProduct();
}

export default Product;