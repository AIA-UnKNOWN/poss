import './Inventory.style.scss';

// Hooks
import useInventory from './Inventory.hook';
// Components
import Input from "src/components/Input/Input";
import Button from "src/components/Button";
import Product from "src/components/cards/Product/Product";
import EmptyState from 'src/components/cards/EmptyState/EmptyState';
import Modal from 'src/components/Modal';

const Inventory = () => {
  const {
    products,
    categories,
    isModalOpen,
    toggleModal,
  } = useInventory();

  return (
    <>
      <Modal
        isOpen={isModalOpen}
        onCloseModal={toggleModal}
      >
        <h1>This is modal</h1>
      </Modal>
      
      <div className="inventory">
        <Input
          placeholder="Search product name, code, or category"
          onChange={({ target: { value } }) => console.log(value)}
        />
        <div className="inventory-categories-container">
          <div className="actions-container">
            <Button
              text="Add category"
              onClick={toggleModal}
            />
          </div>
          <div className='inventory-categories'>
            {categories.length > 0 ? categories.map(category => (
              <button key={category.id} className='category'>
                {category.name}
              </button>
            )) : (
              <EmptyState
                text='No categories available.'
              />
            )}
          </div>
        </div>
        <div className="inventory-products-container">
          <div className="actions-container">
            <Button
              text="Add product"
              onClick={toggleModal}
            />
          </div>
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
        </div>
      </div>
    </>
  )
}

export default Inventory;