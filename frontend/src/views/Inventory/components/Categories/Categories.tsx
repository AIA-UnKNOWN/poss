import './Categories.styles.scss';
import { memo } from 'react';
// Components
import EmptyState from 'src/components/cards/EmptyState/EmptyState';
// Hooks
import useCategories from './Categories.hook';

const Categories = () => {
  const {
    categories,
    selectedCategoryId,
    // Functions
    handleClickCategory,
  } = useCategories();

  return (
    <div className='inventory-categories'>
      {categories.length > 0 ? categories.map(category => (
        <button
          key={category.id}
          className={`category ${category.id === selectedCategoryId ? 'selected' : ''}`}
          onClick={() => handleClickCategory(category.id)}
        >
          {category.name}
        </button>
      )) : (
        <EmptyState
          text='No categories available.'
        />
      )}
    </div>
  )
}

export default memo(Categories);