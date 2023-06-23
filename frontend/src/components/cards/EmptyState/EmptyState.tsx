import './EmptyState.style.scss';
import React from 'react';
// Types
import type { EmtpyStateProps } from './EmptyState.types';

const EmptyState: React.FC<EmtpyStateProps> = props => {
  const {
    text,
    customContentRender,
    className,
  } = props;
  return (
    <div className={`empty-state ${className}`}>
      {customContentRender ?? (
        <span className="message">{text}</span>
      )}
    </div>
  )
}

export default EmptyState;