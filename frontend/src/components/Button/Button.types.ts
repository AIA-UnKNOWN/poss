export type Icon = 'none' | 'angle-left' | 'angle-right' | 'minus' | 'plus' | 'xmark' | 'cart-shopping';

export type Size = 'sm' | 'md';

export interface Button {
  text: string;
  className?: string;
  id?: string;
  iconName?: Icon;
  showLeftIcon?: boolean;
  showText?: boolean;
  size?: Size;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => any;
}
