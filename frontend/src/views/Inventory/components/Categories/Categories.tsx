import './Categories.styles.scss';
import { memo } from 'react';
// Components
import EmptyState from 'src/components/cards/EmptyState/EmptyState';
// Hooks
import useCategories from './Categories.hook';
// Store
import useProductStore from 'src/store/products';

const Categories = () => {
  const { categories } = useCategories();
  const productStore = useProductStore();

  return (
    <div className='inventory-categories'>
      {categories.length > 0 ? categories.map(category => (
        <button
          key={category.id}
          className='category'
          onClick={() => productStore.getAll({ categoryId: category.id })}
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