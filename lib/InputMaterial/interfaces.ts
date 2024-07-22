import { ReactNode } from 'react';
import { TallDefaultVariants } from '../types';

export interface IInputMaterial {
  id: string;
  title: string;
  children: ReactNode;
  variant: TallDefaultVariants;
}
