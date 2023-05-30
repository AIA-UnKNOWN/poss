import './Button.style.scss';
import React from 'react';
// Icons
import { FaAngleLeft } from "react-icons/fa";
// Types
import type { Button } from './Button.types';

const Button: React.FC<Button> = props => {
  const { text, iconName } = props;

  const renderIcon = () : JSX.Element | null => {
    let icon = null;
    switch(iconName) {
      case 'angle-left':
        icon = <FaAngleLeft />;
        break;
      default:
        icon = null;
    }
    return icon === null ? null : (
      <div className='icon-container'>
        {icon}
      </div>
    );
  }

  return (
    <button className='primary-button'>
      {renderIcon()}
      {text}
    </button>
  )
}

export default Button;