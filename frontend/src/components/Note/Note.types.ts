export enum View {
  Green = 'success',
  Red = 'danger',
  Yellow = 'warning',
}

export interface Note {
  text: string;
  view?: View;
}