import './Note.style.scss';
import React from 'react';
// Types
import type { Note } from './Note.types';

const Note: React.FC<Note> = props => {
  const {
    text,
    view = 'success',
  } = props;

  return (
    <div className={`note ${view}`}>
      <span>{text}</span>
    </div>
  );
}

export default Note;