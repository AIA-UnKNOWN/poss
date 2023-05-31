import React from 'react';
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
  
  return (
    <div>
      {showIcon && view === 'hasLeftIcon' && renderIcon()}
      <input {...props} />
      {showIcon && view === 'hasRightIcon' && renderIcon()}
    </div>
  );
}

export default Input;