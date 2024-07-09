/* eslint-disable @typescript-eslint/no-explicit-any */
import { InputHTMLAttributes, ReactNode, TextareaHTMLAttributes } from 'react';
import { IButton } from '../..';
import {
  VARIANT_BASE,
  VARIANT_PRIMARY,
} from '../../constants';
import { VARIANTS_INPUT, SIZES_INPUT } from '../styles/inputStyles';

export type Variant = (typeof VARIANTS_INPUT)[number];
export type Size = (typeof SIZES_INPUT)[number];

export type VariantTag = typeof VARIANT_PRIMARY | typeof VARIANT_BASE;

interface defaultInput {
  variant?: Variant;
  errorState?: boolean;
  sizeType?: Size;
}

export interface IInput
  extends InputHTMLAttributes<HTMLInputElement>,
  defaultInput { }

export interface ITextArea
  extends TextareaHTMLAttributes<HTMLTextAreaElement>,
  Omit<defaultInput, 'sizeType'> { }

export interface ITag extends defaultInput {
  value: string[];
  onChange: (tags: string[], newTag: string) => void;
  onRemoved: (tag: string) => void;
  variantTag?: VariantTag;
  className?: string;
  placeholder?: string;
  disabled?: boolean;
}

export interface ISelect
  extends React.SelectHTMLAttributes<HTMLSelectElement>,
  defaultInput { }
export interface ISelectOption
  extends React.OptionHTMLAttributes<HTMLOptionElement> { }

export type ObjetoOString = { [key: string]: any } | string;

export interface OptionInputSearch<T extends ObjetoOString> {
  value: T;
  label: string;
}
export interface IInputSearch<T extends ObjetoOString> extends defaultInput {
  searchValue: string;
  onSearchValue: (val: string) => void;
  clearable?: boolean;
  disabled?: boolean;
  loading?: boolean;
  labelNoOption?: string;
  value?: OptionInputSearch<T> | null;
  onChange?: (val: OptionInputSearch<T> | null) => void;
  options?: OptionInputSearch<T>[];
  children?: ReactNode;
  buttonClearProps?: Omit<
    IButton,
    'onClick' | 'disabled' | 'type' | 'className' | 'style' | 'children'
  >;
  renderItem?: (val: OptionInputSearch<T>) => ReactNode;
}
