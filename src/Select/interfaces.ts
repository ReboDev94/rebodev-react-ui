import { IDefaultInput } from '../shared/input/input.interfaces';

export interface ISelect
  extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'size'>,
    IDefaultInput {}

export interface ISelectOption
  extends React.OptionHTMLAttributes<HTMLOptionElement> {}
