import './Products.styles.scss';
import { memo } from 'react';
// Components
import Product from "src/components/cards/Product/Product";
import EmptyState from 'src/components/cards/EmptyState/EmptyState';
// Hooks
import useProducts from './Products.hook';

const Products = () => {
  const { products } = useProducts();

  return (
    <div className="inventory-products">
      {products.length > 0 ? products.map(product => (
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

export default memo(Products);