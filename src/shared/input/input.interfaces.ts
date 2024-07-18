import { InputHTMLAttributes } from 'react';
import { TallDefaultVariants, TallSizes } from '../../types';

export interface IDefaultInput {
  variant?: TallDefaultVariants;
  size?: TallSizes;
}

export interface Iinput
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'>,
    IDefaultInput {}
