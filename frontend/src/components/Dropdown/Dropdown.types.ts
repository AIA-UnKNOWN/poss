import type {
  Option,
  Group,
} from 'react-dropdown';

export interface DropdownProps {
  options: (string | Group | Option)[];
  value?: string | Option;
  placeholder?: string;
  onChange?: (arg: Option) => void;
}