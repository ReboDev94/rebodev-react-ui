import {
  POSITION_LB,
  POSITION_LT,
  POSITION_RB,
  POSITION_RT,
} from '../constants';

export const SIZES_LABEL = [
  POSITION_RT,
  POSITION_LB,
  POSITION_LT,
  POSITION_RB,
] as const;
export const DEFAULT_LABEL_CONTAINER_CLASSES = 'flex flex-col w-full';
export const DEFAULT_LABEL_CLASSES = 'text-sm';
export const LABEL_RIGHT_CLASSES = 'text-end';
