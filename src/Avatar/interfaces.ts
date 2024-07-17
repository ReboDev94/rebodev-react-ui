import { ReactNode } from 'react';
import { TallShapes, TallSizes, TallVariant } from '../types';

export interface IAvatar {
  size?: TallSizes;
  shape?: TallShapes;
  border?: boolean;
  variant?: TallVariant;
  className?: string;
  title?: string;
  src?: string;
  children?: ReactNode;
}
