import './AddProduct.styles.scss';
import React from 'react';
// Hooks
import useAddProduct from './AddProduct.hook';
// Components
import Button from "src/components/Button/Button";
import Input from "src/components/Input/Input";
import TextArea from 'src/components/TextArea/TextArea';
import FileUploader from 'src/components/FileUploader';
// Types
import { AddProductProps } from './AddProduct.types';

const AddProduct: React.FC<AddProductProps> = ({ toggleModal }) => {
  const {
    handleSubmit,
  } = useAddProduct({ toggleModal });

  return (
    <form className='modal-content' onSubmit={handleSubmit}>
      <p className='modal-title'>Add Product</p>
      <div className="multi-input-container">
        <Input
          placeholder="Product name"
          name='name'
        />
        <Input
          placeholder="Category name"
          name='categoryName'
        />
      </div>
      <div className="multi-input-container">
        <Input
          placeholder="Quantity"
          type='number'
          name='quantity'
        />
        <Input
          placeholder="Price"
          type='number'
          name='price'
        />
      </div>
      <TextArea
        placeholder='Description'
        name='description'
      />
      <FileUploader name='productImage' />
      <Button
        text="Add"
        onClick={() => console.log('add product')}
      />
    </form>
  )
}

export default AddProduct;