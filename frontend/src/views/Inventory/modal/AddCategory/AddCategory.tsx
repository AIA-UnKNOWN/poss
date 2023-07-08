import './AddCategory.styles.scss';
import { useState } from 'react';
// Components
import Button from "src/components/Button/Button";
import Input from "src/components/Input/Input";
// Services
import useCategoryStore from 'src/store/categories';

const AddCategory = () => {
  const categoryStore = useCategoryStore();
  const [categoryName, setCategoryName] = useState('');
  const [addButtonText, setAddButtonText] = useState('Add');
  const [errorMessage, setErrorMessage] = useState('');

  const addCategory = async (categoryName: string) => {
    setAddButtonText('Adding...');
    try {
      setErrorMessage('');
      await categoryStore.create(categoryName);
      setCategoryName('');
      categoryStore.getAll();
      setAddButtonText('Added!');
    } catch(error) {
      setErrorMessage(error.response.data.message);
      setAddButtonText('Add');
    }
  }

  const categoryNameChangeHandler = (value: string) => {
    setCategoryName(value);
    setAddButtonText('Add');
  }

  return (
    <div className='modal-content'>
      <p className='modal-title'>Add Category</p>
      <div>
        <Input
          placeholder="Category name"
          value={categoryName}
          onChange={e => categoryNameChangeHandler(e.target.value)}
        />
        {errorMessage && (
          <span className='input-error-message'>{errorMessage}</span>
        )}
      </div>
      <Button
        text={addButtonText}
        onClick={() => addCategory(categoryName)}
      />
    </div>
  )
}

export default AddCategory;