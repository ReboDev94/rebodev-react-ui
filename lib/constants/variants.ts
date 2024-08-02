export const VARIANT_DEFAULT = 'default';
export const VARIANT_PRIMARY = 'primary';
export const VARIANT_SECONDARY = 'secondary';
export const VARIANT_SUCCESS = 'success';
export const VARIANT_ERROR = 'error';
export const VARIANT_WARNING = 'warning';
export const VARIANT_INFO = 'info';
export const VARIANT_LIGHT = 'light';
export const VARIANT_DARK = 'dark';
export const VARIANT_OUTLINE_PRIMARY = 'outline-primary';
export const VARIANT_OUTLINE_SECONDARY = 'outline-secondary';
export const VARIANT_OUTLINE_SUCCESS = 'outline-success';
export const VARIANT_OUTLINE_ERROR = 'outline-error';
export const VARIANT_OUTLINE_WARNING = 'outline-warning';
export const VARIANT_OUTLINE_INFO = 'outline-info';
export const VARIANT_OUTLINE_LIGHT = 'outline-light';
export const VARIANT_OUTLINE_DARK = 'outline-dark';

export const ALL_DEFAULT_VARIANTS = [
  VARIANT_PRIMARY,
  VARIANT_SECONDARY,
  VARIANT_SUCCESS,
  VARIANT_ERROR,
  VARIANT_WARNING,
  VARIANT_INFO,
  VARIANT_LIGHT,
  VARIANT_DARK,
] as const;

export const ALL_OUTLINE_VARIANTS = [
  VARIANT_OUTLINE_PRIMARY,
  VARIANT_OUTLINE_SECONDARY,
  VARIANT_OUTLINE_SUCCESS,
  VARIANT_OUTLINE_ERROR,
  VARIANT_OUTLINE_WARNING,
  VARIANT_OUTLINE_INFO,
  VARIANT_OUTLINE_LIGHT,
  VARIANT_OUTLINE_DARK,
] as const;

export const ALL_VARIANTS = [...ALL_DEFAULT_VARIANTS, ...ALL_OUTLINE_VARIANTS];
