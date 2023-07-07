import 'react-dropdown/style.css';
import './Dropdown.style.scss';
import ReactDropdown from 'react-dropdown';
// Types
import type { DropdownProps } from './Dropdown.types';

const Dropdown: React.FC<DropdownProps> = props => {
  const {
    options,
    value,
    placeholder,
    onChange,
  } = props;

  return (
    <ReactDropdown
      className='poss-dropdown'
      controlClassName='poss-dropdown-control'
      menuClassName='poss-dropdown-menu'
      placeholderClassName='poss-dropdown-placeholder'
      options={options}
      onChange={onChange}
      value={value}
      placeholder={placeholder}
    />
  )
}

export default Dropdown;