import { InputHTMLAttributes } from 'react';
import { ALL_SIZES, VARIANT_BASE, VARIANT_ERROR, VARIANT_PRIMARY } from '../constants';

export const VARIANTS_RADIO = [VARIANT_PRIMARY, VARIANT_ERROR, VARIANT_BASE] as const;
export type Variant = (typeof VARIANTS_RADIO)[number];
type Size = (typeof ALL_SIZES)[number];
export interface IRadio extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  sizeRadio?: Size;
  variant?: Variant;
}
