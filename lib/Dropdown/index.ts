import DropdownComponente from './Dropdown';
import DropdownItem from './DropdownItem';
import DropdownToogle from './DropdownToogle';
import DropdownMenu from './DropdownMenu';

import {
  IDropdown,
  IDropdownItem,
  IDropdownMenu,
  IDropdownToogle,
} from './interfaces';

const Dropdown = Object.assign(DropdownComponente, {
  Toogle: DropdownToogle,
  Menu: DropdownMenu,
  Item: DropdownItem,
});

export default Dropdown;
export type { IDropdown, IDropdownToogle, IDropdownMenu, IDropdownItem };
