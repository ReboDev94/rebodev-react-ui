import {
  ALL_SIZES,
  POSITION_HORIZONTAL,
  POSITION_VERTICAL,
  VARIANT_BASE,
  VARIANT_PRIMARY,
} from '../constants';
import { DATA_DIVIDER } from './styles';

export const VARIANTS_DIVIDER = [VARIANT_BASE, VARIANT_PRIMARY] as const;
export const POSITION_DIVIDER = [
  POSITION_VERTICAL,
  POSITION_HORIZONTAL,
] as const;

export type TPositionDivider = (typeof POSITION_DIVIDER)[number];
export type TVariantsDivider = (typeof VARIANTS_DIVIDER)[number];
export type TSizeDivider = (typeof ALL_SIZES)[number];
export type TDataDivider = keyof typeof DATA_DIVIDER;
export interface IDivider {
  className?: string;
  size?: TSizeDivider;
  position?: TPositionDivider;
  variant?: TVariantsDivider;
}
