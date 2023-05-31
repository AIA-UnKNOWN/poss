export enum Icon {
  None = 'none',
  AngleLeft = 'angle-left',
  AngleRight = 'angle-right',
  Minus = 'minus',
  Plus = 'plus',
}

export interface Button {
  text: string;
  iconName?: Icon;
  showLeftIcon?: boolean;
  showText?: boolean;
}
