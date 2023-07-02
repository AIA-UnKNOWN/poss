import './Button.style.scss';
import React from 'react';
// Icons
import { FaAngleLeft, FaAngleRight, FaMinus, FaPlus, FaXmark, FaCartShopping } from "react-icons/fa6";
// Types
import type { Button } from './Button.types';

const Button: React.FC<Button> = props => {
  const {
    text,
    className,
    id,
    iconName,
    showLeftIcon = false,
    showText = true,
    size = 'md',
    onClick,
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
      case 'xmark':
        icon = <FaXmark />
        break;
      case 'cart-shopping':
        icon = <FaCartShopping />
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
    <button
      id={id}
      className={`primary-button button-${size} ${className}`}
      onClick={onClick}
    >
      {showLeftIcon && renderIcon()}
      {showText && text}
    </button>
  )
}

export default Button;