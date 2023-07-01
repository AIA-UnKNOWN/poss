import './Products.styles.scss';
import { memo } from 'react';
// Components
import Product from "src/components/cards/Product/Product";
import EmptyState from 'src/components/cards/EmptyState/EmptyState';
// Hooks
import useProducts from './Products.hook';

const Products = () => {
  const { products } = useProducts();

  if (products.length === 0) return (
    <EmptyState
      text='No products available.'
    />
  );

  return (
    <div className="inventory-products">
      {products.map(product => (
        <Product
          key={product.id}
          product={product}
        />
      ))}
    </div>
  )
}

export default memo(Products);