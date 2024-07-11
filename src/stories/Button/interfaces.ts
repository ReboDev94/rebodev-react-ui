import { ButtonHTMLAttributes } from 'react';
import {
  ALL_SIZES,
  VARIANT_BASE,
  VARIANT_ERROR,
  VARIANT_OUTLINE_BASE,
  VARIANT_OUTLINE_ERROR,
  VARIANT_OUTLINE_PRIMARY,
  VARIANT_PRIMARY,
} from '../constants';

export const VARIANT_BTN = [
  VARIANT_BASE,
  VARIANT_OUTLINE_BASE,
  VARIANT_PRIMARY,
  VARIANT_OUTLINE_PRIMARY,
  VARIANT_ERROR,
  VARIANT_OUTLINE_ERROR,
] as const;

export type VariantBtn = (typeof VARIANT_BTN)[number];
export type SizeBtn = (typeof ALL_SIZES)[number];

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: VariantBtn;
  block?: boolean;
  size?: SizeBtn;
}
