import './Inventory.style.scss';

// Hooks
import useInventory from './Inventory.hook';
// Components
import Input from "src/components/Input/Input";
import Button from "src/components/Button";
import Product from "src/components/cards/Product/Product";

const Inventory = props => {
  const {
    products,
    categories,
  } = useInventory();

  return (
    <div className="inventory">
      <Input
        placeholder="Search product name, code, or category"
        onChange={({ target: { value } }) => console.log(value)}
      />
      <div className="inventory-categories-container">
        <div className="actions-container">
          <Button
            text="Add category"
          />
        </div>
        <div className='inventory-categories'>
          {categories.length > 0 ? categories.map(category => (
            <button key={category.id} className='category'>
              {category.name}
            </button>
          )) : (
            <div className='no-category-state'>
              <span>No categories available.</span>
            </div>
          )}
        </div>
      </div>
      <div className="inventory-products-container">
        <div className="actions-container">
          <Button
            text="Add product"
          />
        </div>
        <div className="inventory-products">
          {products.length > 0 ? products.map(product => (
            <Product
              key={product.id}
              product={product}
            />
          )) : (
            <div className='no-product-state'>
              <span>No products available.</span>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Inventory;