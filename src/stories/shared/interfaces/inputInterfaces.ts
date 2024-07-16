/* eslint-disable @typescript-eslint/no-explicit-any */
import { InputHTMLAttributes, ReactNode, TextareaHTMLAttributes } from 'react';
import { IButton } from '../..';
import {
  SIZE_LG,
  SIZE_MD,
  SIZE_SM,
  SIZE_XS,
  VARIANT_BASE,
  VARIANT_ERROR,
  VARIANT_PRIMARY,
} from '../../constants';

export const VARIANTS_INPUT = [
  VARIANT_PRIMARY,
  VARIANT_ERROR,
  VARIANT_BASE,
] as const;
export const SIZES_INPUT = [SIZE_XS, SIZE_SM, SIZE_MD, SIZE_LG] as const;
export const VARIANTS_TAG = [VARIANT_PRIMARY, VARIANT_BASE] as const;

export type Variant = (typeof VARIANTS_INPUT)[number];
export type Size = (typeof SIZES_INPUT)[number];
export type VariantTag = (typeof VARIANTS_TAG)[number];

interface defaultInput {
  variant?: Variant;
  errorState?: boolean;
  sizeType?: Size;
}

export interface IInput
  extends InputHTMLAttributes<HTMLInputElement>,
    defaultInput {}

export interface ITextArea
  extends TextareaHTMLAttributes<HTMLTextAreaElement>,
    Omit<defaultInput, 'sizeType'> {}

type TChangeTag = (tags: string[], newTag: string) => void;
type TRemovedTag = (tag: string) => void;
export interface ITag extends defaultInput {
  value: string[];
  onChange: TChangeTag;
  onRemoved: TRemovedTag;
  variantTag?: VariantTag;
  className?: string;
  placeholder?: string;
  disabled?: boolean;
}

export interface ISelect
  extends React.SelectHTMLAttributes<HTMLSelectElement>,
    defaultInput {}
export interface ISelectOption
  extends React.OptionHTMLAttributes<HTMLOptionElement> {}

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
    | 'block'
    | 'onClick'
    | 'disabled'
    | 'type'
    | 'className'
    | 'style'
    | 'size'
    | 'children'
  >;
  renderItem?: (val: OptionInputSearch<T>) => ReactNode;
}
