import {
  ALL_OUTLINE_VARIANTS,
  ALL_SHAPES,
  ALL_SIZES,
  ALL_DEFAULT_VARIANTS,
  POSITION_DIVIDER,
  ALL_POSITIONS,
  ALL_ALINGS,
  ALL_POSITIONS_LABEL,
} from './constants';

export type OmitValue<T, U> = T extends U ? never : T;

export type TallSizes = (typeof ALL_SIZES)[number];
export type TallShapes = (typeof ALL_SHAPES)[number];
export type TallDefaultVariants = (typeof ALL_DEFAULT_VARIANTS)[number];
export type TallOutlineVariants = (typeof ALL_OUTLINE_VARIANTS)[number];
export type TallVariants = TallDefaultVariants | TallOutlineVariants;
export type TallPositions = (typeof ALL_POSITIONS)[number];
export type TpositionDivider = (typeof POSITION_DIVIDER)[number];
export type TallAlings = (typeof ALL_ALINGS)[number];
export type TallPositionLabel = (typeof ALL_POSITIONS_LABEL)[number];
