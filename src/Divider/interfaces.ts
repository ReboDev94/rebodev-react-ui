import { POSITION_HORIZONTAL, POSITION_VERTICAL } from '../constants';
import { OmitValue, TallDefaultVariants, TallSizes } from '../types';

export const POSITION_DIVIDER = [
  POSITION_VERTICAL,
  POSITION_HORIZONTAL,
] as const;

export type TPositionDivider = (typeof POSITION_DIVIDER)[number];

export interface IDivider {
  className?: string;
  size?: TallSizes;
  position?: TPositionDivider;
  variant?: OmitValue<TallDefaultVariants, 'light'>;
}
