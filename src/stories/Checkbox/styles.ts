import {
  VARIANT_BASE,
  VARIANT_ERROR,
  VARIANT_PRIMARY,
  SIZE_XS,
  SIZE_SM,
  SIZE_LG,
  SIZE_MD,
} from '../constants';

export const WRAPPER_CHECKBOX_ICON =
  'absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100';
export const WRAPPER_CHECKBOX_CLASSES =
  'relative flex items-center cursor-pointer';
export const CHECKBOX_CLASSES =
  "before:content[''] peer relative cursor-pointer appearance-none rounded border transition-all hover:before:opacity-10";

const BASE_CHECKBOX_CLASSES =
  'border-base-500 checked:border-base-600 checked:bg-base-600 checked:before:bg-base-600';
const ERROR_CHECKBOX_CLASSES =
  'border-error-500 checked:border-error-800 checked:bg-error-800 checked:before:bg-error-800';
const PRIMARY_CHECKBOX_CLASSES =
  'border-primary-600 checked:border-primary-800 checked:bg-primary-800 checked:before:bg-primary-800';

export const VARIANT_CHECKBOX = {
  [VARIANT_BASE]: BASE_CHECKBOX_CLASSES,
  [VARIANT_ERROR]: ERROR_CHECKBOX_CLASSES,
  [VARIANT_PRIMARY]: PRIMARY_CHECKBOX_CLASSES,
};

const SIZE_XS_CHECKBOX_CLASSES = 'h-5 w-5';
const SIZE_SM_CHECKBOX_CLASSES = 'h-6 w-6';
const SIZE_MD_CHECKBOX_CLASSES = 'h-7 w-7';
const SIZE_LG_CHECKBOX_CLASSES = 'h-8 w-8';

export const SIZE_CHECKBOX = {
  [SIZE_XS]: SIZE_XS_CHECKBOX_CLASSES,
  [SIZE_SM]: SIZE_SM_CHECKBOX_CLASSES,
  [SIZE_MD]: SIZE_MD_CHECKBOX_CLASSES,
  [SIZE_LG]: SIZE_LG_CHECKBOX_CLASSES,
};
