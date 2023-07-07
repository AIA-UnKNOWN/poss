import './AddProduct.styles.scss';
import React from 'react';
// Hooks
import useAddProduct from './AddProduct.hook';
// Components
import Button from "src/components/Button/Button";
import Input from "src/components/Input/Input";
import TextArea from 'src/components/TextArea/TextArea';
import FileUploader from 'src/components/FileUploader';
import Dropdown from 'src/components/Dropdown';
// Types
import { AddProductProps } from './AddProduct.types';

const AddProduct: React.FC<AddProductProps> = ({ toggleModal }) => {
  const {
    categories,
    formError,
    setCategory,
    setFiles,
    handleSubmit,
  } = useAddProduct({ toggleModal });

  return (
    <form className='modal-content' onSubmit={handleSubmit}>
      <p className='modal-title'>Add Product</p>
      <div className="multi-input-container">
        <div className='input-wrapper'>
          <Input
            placeholder="Product name"
            name='name'
          />
          {formError.name && (
            <span className='input-error-message'>{formError.name}</span>
          )}
        </div>
        <div className='input-wrapper'>
          <Dropdown
            options={categories}
            placeholder='Category'
            onChange={selectedCategory => setCategory(selectedCategory)}
          />
        </div>
      </div>
      <div className="multi-input-container">
        <div className="input-wrapper">
          <Input
            placeholder="Quantity"
            type='number'
            name='quantity'
          />
          {formError.quantity && (
            <span className='input-error-message'>{formError.quantity}</span>
          )}
        </div>
        <div className="input-wrapper">
          <Input
            placeholder="Price"
            type='number'
            name='price'
          />
          {formError.price && (
            <span className='input-error-message'>{formError.price}</span>
          )}
        </div>
      </div>
      <div className="input-wrapper">
        <TextArea
          placeholder='Description'
          name='description'
        />
      </div>
      <FileUploader
        onChange={files => setFiles(files)}
      />
      <Button
        text="Add"
        onClick={() => console.log('add product')}
      />
    </form>
  )
}

export default AddProduct;