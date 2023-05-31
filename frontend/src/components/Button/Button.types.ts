export enum Icon {
  None = 'none',
  AngleLeft = 'angle-left',
  AngleRight = 'angle-right',
  Minus = 'minus',
  Plus = 'plus',
}

export enum Size {
  Small = 'sm',
  Medium = 'md',
}

export interface Button {
  text: string;
  iconName?: Icon;
  showLeftIcon?: boolean;
  showText?: boolean;
  size?: Size;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => any;
}
