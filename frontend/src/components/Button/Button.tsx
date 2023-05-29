import './Button.style.scss';
import React from 'react';
import { AiFillCheckCircle } from "react-icons/ai";
// Types
import type { Button } from './Button.types';

const Button: React.FC<Button> = props => {
  const { text } = props;

  return (
    <button className='primary-button'>
      <div className='icon-container'>
        <AiFillCheckCircle />
      </div>
      {text}
    </button>
  )
}

export default Button;