import { InputHTMLAttributes } from 'react';
import { TallDefaultVariants, TallSizes } from '../types';

export interface ICheckBox
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
  size?: TallSizes;
  variant?: TallDefaultVariants;
}
