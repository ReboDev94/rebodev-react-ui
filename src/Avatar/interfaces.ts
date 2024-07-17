import { ReactNode } from 'react';
import { TallShapes, TallSizes, TallDefaultVariants } from '../types';

export interface IAvatar {
  size?: TallSizes;
  shape?: TallShapes;
  border?: boolean;
  variant?: TallDefaultVariants;
  className?: string;
  title?: string;
  src?: string;
  children?: ReactNode;
}
