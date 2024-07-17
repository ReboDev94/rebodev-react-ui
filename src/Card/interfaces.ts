import { ReactNode } from 'react';
import { TallDefaultVariants } from '../types';
import { VARIANT_DEFAULT } from '../constants';

export interface ICard {
  variant?: TallDefaultVariants | typeof VARIANT_DEFAULT;
  className?: string;
  children?: ReactNode;
}

export interface ICardBody {
  children: ReactNode;
  className?: string;
}
