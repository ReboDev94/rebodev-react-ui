import { InputHTMLAttributes } from 'react';
import { TallDefaultVariants, TallSizes, OmitValue } from '../types';
export interface IRadio
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
  size?: TallSizes;
  variant?: OmitValue<TallDefaultVariants, 'light'>;
}
