import './index.css';
import {
  IDropdown,
  IDropdownItem,
  IDropdownMenu,
  IDropdownToogle,
} from './Dropdown';
import { ITag } from './Tag';
import { Iinput } from './Input';
import { IModal } from './Modal';
import { IRadio } from './Radio';
import { IAvatar } from './Avatar';
import { IButton } from './Button';
import { ILoading } from './Loading';
import { IDivider } from './Divider';
import { IForm } from './Form';
import { IFormLabel } from './FormLabel';
import { IInputMaterial } from './InputMaterial';
import { ICheckBox } from './Checkbox';
import { ITextArea } from './Textarea';
import { ICard, ICardBody } from './Card';
import { IErrorInput } from './ErrorInput';
import { IPagination } from './Pagination';
import { ISelect, ISelectOption } from './Select';
import { IItemListGroup, IListGroup } from './ListGroup';
import { IMenu, IMenuCollpse, IMenuItem } from './Menu';
import { ITable, ITableBody, ITableHead, ITableCol, ITableRow } from './Table';
import {
  IInputSearch,
  IOptionInputSearch,
  TObjetoOString,
} from './InputSearch';
import { IBackDrop, ICategory, IContent, IHeader, ISidebar } from './Sidebar';

export type { IInputSearch, IOptionInputSearch, TObjetoOString };
export { default as InputSearch } from './InputSearch';

/* Select */
export type { ISelect, ISelectOption };
export { default as Select } from './Select';

/* Loading */
export type { ILoading };
export { default as Loading } from './Loading';

/* Modal */
export type { IModal };
export { default as Modal } from './Modal';

/* Radio */
export type { IRadio };
export { default as Radio } from './Radio';

/* Checkbox */
export type { ICheckBox };
export { default as Checkbox } from './Checkbox';

/* Pagination */
export type { IPagination };
export { default as Pagination } from './Pagination';

/* Error input */
export type { IErrorInput };
export { default as ErrorInput } from './ErrorInput';

/* Divider */
export type { IDivider };
export { default as Divider } from './Divider';

/* ListGroup */
export type { IListGroup, IItemListGroup };
export { default as ListGroup } from './ListGroup';

/* Tag */
export type { ITag };
export { default as Tag } from './Tag';

/* Table */
export type { ITable, ITableHead, ITableCol, ITableRow, ITableBody };
export { default as Table } from './Table';

/* DropDown */
export type { IDropdown, IDropdownToogle, IDropdownMenu, IDropdownItem };
export { default as Dropdown } from './Dropdown';

/* Avatar */
export type { IAvatar };
export { default as Avatar } from './Avatar';

/* Menu */
export type { IMenu, IMenuCollpse, IMenuItem };
export { default as Menu } from './Menu';

/* Form */
export type { IForm, IFormLabel, IInputMaterial };
export { default as Form } from './Form';
export { default as FormLabel } from './FormLabel';
export { default as InputMaterial } from './InputMaterial';

/* TextArea */
export type { ITextArea };
export { default as Textarea } from './Textarea';

/* Input */
export type { Iinput };
export { default as Input } from './Input';

/* Sidebar */
export type { ISidebar, IContent, ICategory, IHeader, IBackDrop };
export { default as Sidebar } from './Sidebar';

/* Button */
export type { IButton };
export { default as Button } from './Button';

/* Card */
export type { ICard, ICardBody };
export { default as Card } from './Card';
