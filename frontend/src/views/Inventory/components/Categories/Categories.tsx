import './Categories.styles.scss';
// Components
import EmptyState from 'src/components/cards/EmptyState/EmptyState';
// Hooks
import useCategories from './Categories.hook';

const Categories = () => {
  const { categories } = useCategories();

  return (
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
  )
}

export default Categories;