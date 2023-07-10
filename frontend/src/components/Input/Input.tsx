import './Input.style.scss';
import React, { useRef, useEffect } from 'react';
// Types
import type { Input } from './Input.types';
// Icons
import { FaAngleLeft, FaAngleRight, FaMinus, FaPlus } from "react-icons/fa";


const Input: React.FC<Input> = props => {
  const {
    iconName,
    view = 'hasLeftIcon',
    showIcon = false,
  } = props;
  const inputContainerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.addEventListener('focus', () => {
      inputContainerRef.current?.classList.add('focus');
    });
    inputRef.current?.addEventListener('blur', () => {
      inputContainerRef.current?.classList.remove('focus');
    });
  }, []);

  const renderIcon = () : JSX.Element | null => {
    let icon = null;
    switch(iconName) {
      case 'angle-left':
        icon = <FaAngleLeft />;
        break;
      case 'angle-right':
        icon = <FaAngleRight />;
        break;
      case 'minus':
        icon = <FaMinus />
        break;
      case 'plus':
        icon = <FaPlus />
        break;
      case 'none':
      default:
        icon = null;
    }
    return icon === null ? null : (
      <div className={`icon-container`}>
        {icon}
      </div>
    );
  }

  const renderInput = () => {
    switch(props.type) {
      case 'checkbox':
        return (
          <input type='checkbox' {...props} />
        );
      default:
        return (
          <div ref={inputContainerRef} className='input-container'>
            {showIcon && view === 'hasLeftIcon' && renderIcon()}
            <input ref={inputRef} {...props} />
            {showIcon && view === 'hasRightIcon' && renderIcon()}
          </div>
        );
    }
  }
  
  return renderInput();
}

export default Input;