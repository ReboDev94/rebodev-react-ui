import { InputHTMLAttributes } from 'react';
import { VARIANTS_CHECKBOX } from './styles';
import { ALL_SIZES } from '../constants';

export type Variant = (typeof VARIANTS_CHECKBOX)[number];
export type Size = (typeof ALL_SIZES)[number];
export interface ICheckBox extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  sizeCheck?: Size;
  variant?: Variant;
}
