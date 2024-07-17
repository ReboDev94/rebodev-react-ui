import {
  ALL_OUTLINE_VARIANTS,
  ALL_SHAPES,
  ALL_SIZES,
  ALL_DEFAULT_VARIANTS,
} from './constants';

export type TallSizes = (typeof ALL_SIZES)[number];
export type TallShapes = (typeof ALL_SHAPES)[number];
export type TallDefaultVariants = (typeof ALL_DEFAULT_VARIANTS)[number];
export type TallOutlineVariants = (typeof ALL_OUTLINE_VARIANTS)[number];
export type TallVariants = TallDefaultVariants | TallOutlineVariants;
