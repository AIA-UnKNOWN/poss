import './AddProduct.styles.scss';
// Components
import Button from "src/components/Button/Button";
import Input from "src/components/Input/Input";
import TextArea from 'src/components/TextArea/TextArea';

const AddProduct = () => {

  return (
    <div className='modal-content'>
      <p className='modal-title'>Add Product</p>
      <div className="multi-input-container">
        <Input
          placeholder="Product name"
          onChange={e => console.log(e.target.value)}
        />
        <Input
          placeholder="Category name"
          onChange={e => console.log(e.target.value)}
        />
      </div>
      <div className="multi-input-container">
        <Input
          placeholder="Quantity"
          type='number'
          onChange={e => console.log(e.target.value)}
        />
        <Input
          placeholder="Price"
          type='number'
          onChange={e => console.log(e.target.value)}
        />
      </div>
      <TextArea
        placeholder='Description'
      />
      <Button
        text="Add"
        onClick={() => console.log('add product')}
      />
    </div>
  )
}

export default AddProduct;