import './TextArea.style.scss';
import React from 'react';
// Types
import type { TextAreaProps } from './TextArea.types';

const TextArea: React.FC<TextAreaProps> = props => {

  return (
    <div className='textarea-container'>
      <textarea
        {...props}
        className={`textarea ${props.className}`}
      >
        {props.value}
      </textarea>
    </div>
  )
}

export default TextArea;