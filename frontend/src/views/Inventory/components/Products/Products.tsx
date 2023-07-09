import './Products.styles.scss';
import { memo } from 'react';
// Components
import Product from "src/components/cards/Product/Product";
import EmptyState from 'src/components/cards/EmptyState/EmptyState';
// Hooks
import useProducts from './Products.hook';
// Store
import useProductStore from 'src/store/products';

const Products = () => {
  const { products } = useProducts();
  const productStore = useProductStore();

  if (productStore.isLoading) return (
    <h1>Loading products...</h1>
  );

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