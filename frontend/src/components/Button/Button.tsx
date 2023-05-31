import './Button.style.scss';
import React from 'react';
// Icons
import { FaAngleLeft, FaAngleRight, FaMinus, FaPlus } from "react-icons/fa";
// Types
import type { Button } from './Button.types';

const Button: React.FC<Button> = props => {
  const {
    text,
    iconName,
    showLeftIcon = false,
    showText = true,
    size = 'md',
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
      <div
        className={`icon-container ${showLeftIcon && showText && 'icon-gap'}`}
      >
        {icon}
      </div>
    );
  }

  return (
    <button className={`primary-button button-${size}`}>
      {showLeftIcon && renderIcon()}
      {showText && text}
    </button>
  )
}

export default Button;