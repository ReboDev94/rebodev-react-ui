import { ReactNode } from 'react';
import { TallPositionLabel } from '../types';

export interface IFormLabel {
  title: string;
  className?: string;
  children?: ReactNode;
  position?: TallPositionLabel;
}
