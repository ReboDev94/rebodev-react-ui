import { ButtonHTMLAttributes } from 'react';
import { ALL_SIZES } from '../constants';
import { VARIANT_BTN } from './styles';

export type VariantBtn = (typeof VARIANT_BTN)[number];
export type SizeBtn = (typeof ALL_SIZES)[number];

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: VariantBtn;
  block?: boolean;
  size?: SizeBtn;
}
