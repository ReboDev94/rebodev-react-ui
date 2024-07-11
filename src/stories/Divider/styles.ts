import { VARIANT_BASE, VARIANT_PRIMARY } from '../constants';

export const DEFAULT_DIVIDER_CLASSES = 'self-stretch';
const BASE_DIVIDER_CLASSES = 'bg-base-100';
const PRIMARY_DIVIDER_CLASSES = 'bg-primary-200';

export const TYPE_DIVIDER = {
  [VARIANT_BASE]: BASE_DIVIDER_CLASSES,
  [VARIANT_PRIMARY]: PRIMARY_DIVIDER_CLASSES,
};

export const DATA_DIVIDER = {
  HORIZONTAL_XS_CLASSES: 'w-full h-[1.5px]',
  HORIZONTAL_SM_CLASSES: 'w-full h-[2.5px]',
  HORIZONTAL_MD_CLASSES: 'w-full h-[3.5px]',
  HORIZONTAL_LG_CLASSES: 'w-full h-[4.5px]',
  VERTICAL_XS_CLASSES: 'w-[1.5px] h-full',
  VERTICAL_SM_CLASSES: 'w-[2.5px] h-full',
  VERTICAL_MD_CLASSES: 'w-[3.5px] h-full',
  VERTICAL_LG_CLASSES: 'w-[4.5px] h-full',
} as const;
