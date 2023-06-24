import './Categories.styles.scss';
import React from 'react';
// Components
import EmptyState from 'src/components/cards/EmptyState/EmptyState';
// Types
import type { CategoriesProps } from './Categories.types';

const Categories: React.FC<CategoriesProps> = ({ data }) => {

  return (
    <div className='inventory-categories'>
      {data.length > 0 ? data.map(category => (
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