import React from 'react';

import type { Icon } from '../Button/Button.types';

export interface Input extends React.InputHTMLAttributes<HTMLInputElement> {
  iconName?: Icon;
  showIcon?: boolean;
  view?: 'hasLeftIcon' | 'hasRightIcon';
}