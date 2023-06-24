import './Inventory.style.scss';

// Hooks
import useInventory from './Inventory.hook';
// Components
import Input from "src/components/Input/Input";
import Button from "src/components/Button";
import Modal from 'src/components/Modal';
import Products from './components/Products/Products';
import Categories from './components/Categories/Categories';

const Inventory = () => {
  const {
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
          <Categories />
        </div>
        <div className="inventory-products-container">
          <div className="actions-container">
            <Button
              text="Add product"
              onClick={toggleModal}
            />
          </div>
          <Products />
        </div>
      </div>
    </>
  )
}

export default Inventory;