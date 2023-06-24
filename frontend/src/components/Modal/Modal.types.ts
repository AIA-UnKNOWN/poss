export interface Modal {
  isOpen: boolean;
  onCloseModal?: () => void;
  children?: JSX.Element;
}