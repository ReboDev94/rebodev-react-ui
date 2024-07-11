import { ReactNode } from 'react';
import { POSITION_LB, POSITION_LT, POSITION_RB, POSITION_RT } from '../constants';

export const SIZES_LABEL = [
  POSITION_RT,
  POSITION_LB,
  POSITION_LT,
  POSITION_RB,
] as const;

type labelPosition = (typeof SIZES_LABEL)[number];

export interface IFormLabel {
  title: string;
  className?: string;
  children?: ReactNode;
  position?: labelPosition;
}
