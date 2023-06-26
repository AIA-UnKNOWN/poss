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

  const addCategory = async (categoryName: string) => {
    setAddButtonText('Adding...');
    await categoryStore.create(categoryName);
    setCategoryName('');
    setAddButtonText('Added!');
    categoryStore.getAll();
  }

  const categoryNameChangeHandler = (value: string) => {
    setCategoryName(value);
    setAddButtonText('Add');
  }

  return (
    <div className='modal-content'>
      <p className='modal-title'>Add Category</p>
      <Input
        placeholder="Category name"
        value={categoryName}
        onChange={e => categoryNameChangeHandler(e.target.value)}
      />
      <Button
        text={addButtonText}
        onClick={() => addCategory(categoryName)}
      />
    </div>
  )
}

export default AddCategory;