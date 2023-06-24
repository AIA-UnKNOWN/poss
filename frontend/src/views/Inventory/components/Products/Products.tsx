import './Products.styles.scss';
import React from 'react';
// Components
import Product from "src/components/cards/Product/Product";
import EmptyState from 'src/components/cards/EmptyState/EmptyState';
// Types
import type { ProductsProps } from './Products.types';

const Products: React.FC<ProductsProps> = ({ data }) => {

  return (
    <div className="inventory-products">
      {data.length > 0 ? data.map(product => (
        <Product
          key={product.id}
          product={product}
        />
      )) : (
        <EmptyState
          text='No products available.'
        />
      )}
    </div>
  )
}

export default Products;