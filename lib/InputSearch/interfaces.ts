/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode } from 'react';
import { IDefaultInput } from '../shared/input/input.interfaces';
import { TallVariants } from '../types';

export type TObjetoOString = { [key: string]: any } | string;
export interface IOptionInputSearch<T extends TObjetoOString> {
  value: T;
  label: string;
}

export interface IInputSearch<T extends TObjetoOString> extends IDefaultInput {
  searchValue: string;
  onSearchValue: (val: string) => void;
  clearable?: boolean;
  disabled?: boolean;
  loading?: boolean;
  labelNoOption?: string;
  placeholder?: string;
  value?: IOptionInputSearch<T> | null;
  onChange?: (val: IOptionInputSearch<T> | null) => void;
  options?: IOptionInputSearch<T>[];
  children?: ReactNode;
  closeButtonVariant: TallVariants;
  renderItem?: (val: IOptionInputSearch<T>) => ReactNode;
}
