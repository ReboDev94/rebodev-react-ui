import { ButtonHTMLAttributes } from 'react';
import { TallVariants, TallSizes } from '../types';

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: TallVariants;
  block?: boolean;
  size?: TallSizes;
}
