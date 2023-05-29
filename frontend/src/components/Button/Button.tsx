import './Button.style.scss';
import React from 'react';
// Types
import type { Button } from './Button.types';

const Button: React.FC<Button> = props => {
  const { text } = props;

  return (
    <button className='primary-button'>
      {text}
    </button>
  )
}

export default Button;