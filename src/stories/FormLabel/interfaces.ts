import { ReactNode } from 'react';
import { SIZES_LABEL } from './styles';

type labelPosition = (typeof SIZES_LABEL)[number];

export interface IFormLabel {
  title: string;
  className?: string;
  children?: ReactNode;
  position?: labelPosition;
}
