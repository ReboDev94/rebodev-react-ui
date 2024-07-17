import {
  ALL_OUTLINE_VARIANTS,
  ALL_SHAPES,
  ALL_SIZES,
  ALL_VARIANTS,
} from './constants';

export type TallSizes = (typeof ALL_SIZES)[number];
export type TallShapes = (typeof ALL_SHAPES)[number];
export type TallVariant = (typeof ALL_VARIANTS)[number];
export type TallOutlineVariant = (typeof ALL_OUTLINE_VARIANTS)[number];
