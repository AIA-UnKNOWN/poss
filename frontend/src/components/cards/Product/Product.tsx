import './Product.style.scss';
import React from "react";
import type { ProductProps } from "./Product.types";

const Product: React.FC<ProductProps> = props => {
  const { product, view } = props;
  const {
    name,
    price,
    photoUrl,
  } = product;

  const renderProduct = () : JSX.Element => {
    switch(view) {
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