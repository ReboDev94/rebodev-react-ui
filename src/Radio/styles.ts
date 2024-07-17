import {
  SIZE_LG,
  SIZE_MD,
  SIZE_SM,
  SIZE_XS,
  VARIANT_BASE,
  VARIANT_ERROR,
  VARIANT_PRIMARY,
} from '../constants';

export const RADIO_CLASSES =
  'appearance-none rounded-full cursor-pointer border checked:shadow-[0_0_0_4px_white_inset]';

const BASE_RADIO_CLASSES = 'border-base-600 checked:bg-base-600';
const ERROR_RADIO_CLASSES = 'border-error-800  checked:bg-error-800';
const PRIMARY_RADIO_CLASSES = 'border-primary-800 checked:bg-primary-800';

export const VARIANT_RADIO = {
  [VARIANT_BASE]: BASE_RADIO_CLASSES,
  [VARIANT_ERROR]: ERROR_RADIO_CLASSES,
  [VARIANT_PRIMARY]: PRIMARY_RADIO_CLASSES,
};

const SIZE_XS_RADIO_CLASSES = 'h-5 w-5';
const SIZE_SM_RADIO_CLASSES = 'h-6 w-6';
const SIZE_MD_RADIO_CLASSES = 'h-7 w-7';
const SIZE_LG_RADIO_CLASSES = 'h-8 w-8';

export const SIZE_RADIO = {
  [SIZE_XS]: SIZE_XS_RADIO_CLASSES,
  [SIZE_SM]: SIZE_SM_RADIO_CLASSES,
  [SIZE_MD]: SIZE_MD_RADIO_CLASSES,
  [SIZE_LG]: SIZE_LG_RADIO_CLASSES,
};
