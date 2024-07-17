import { InputHTMLAttributes } from 'react';
import {
  ALL_SIZES,
  VARIANT_BASE,
  VARIANT_ERROR,
  VARIANT_PRIMARY,
} from '../constants';

export const VARIANTS_CHECKBOX = [
  VARIANT_PRIMARY,
  VARIANT_ERROR,
  VARIANT_BASE,
] as const;

export type Variant = (typeof VARIANTS_CHECKBOX)[number];
type Size = (typeof ALL_SIZES)[number];
export interface ICheckBox
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  sizeCheck?: Size;
  variant?: Variant;
}
