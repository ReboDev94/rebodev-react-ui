import {
  ALL_SIZES,
  VARIANT_BASE,
  VARIANT_ERROR,
  VARIANT_PRIMARY,
} from '../constants';

export const VARIANTS_LOADING = [
  VARIANT_BASE,
  VARIANT_ERROR,
  VARIANT_PRIMARY,
] as const;

type VariantLoading = (typeof VARIANTS_LOADING)[number];
type SizeLoading = (typeof ALL_SIZES)[number];

export interface ILoading {
  className?: string;
  variant?: VariantLoading;
  size?: SizeLoading;
}
