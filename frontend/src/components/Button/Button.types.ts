export type Icon = 'none' | 'angle-left' | 'angle-right' | 'minus' | 'plus';

export type Size = 'sm' | 'md';

export interface Button {
  text: string;
  iconName?: Icon;
  showLeftIcon?: boolean;
  showText?: boolean;
  size?: Size;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => any;
}
