export enum Icon {
  None = 'none',
  AngleLeft = 'angle-left',
}

export interface Button {
  text: string;
  iconName?: Icon;
  showLeftIcon?: boolean;
  showText?: boolean;
}
