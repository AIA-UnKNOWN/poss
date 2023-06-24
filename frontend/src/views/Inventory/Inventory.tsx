import './Inventory.style.scss';

// Hooks
import useInventory from './Inventory.hook';
// Components
import Input from "src/components/Input/Input";
import Button from "src/components/Button";
import Modal from 'src/components/Modal';
import Products from './components/Products/Products';
import Categories from './components/Categories/Categories';
// Modals
import AddCategory from './modal/AddCategory/AddCategory';
import AddProduct from './modal/AddProduct/AddProduct';

const Inventory = () => {
  const {
    isModalOpen,
    modalLabel,
    toggleModal,
  } = useInventory();

  const renderModalContent = () => {
    switch(modalLabel) {
      case 'ADD_CATEGORY':
        return <AddCategory />;
      case 'ADD_PRODUCT':
        return <AddProduct />;
    }
  }

  return (
    <>
      <Modal
        isOpen={isModalOpen}
        onCloseModal={() => toggleModal()}
      >
        {renderModalContent()}
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
              onClick={() => toggleModal('ADD_CATEGORY')}
            />
          </div>
          <Categories />
        </div>
        <div className="inventory-products-container">
          <div className="actions-container">
            <Button
              text="Add product"
              onClick={() => toggleModal('ADD_PRODUCT')}
            />
          </div>
          <Products />
        </div>
      </div>
    </>
  )
}

export default Inventory;