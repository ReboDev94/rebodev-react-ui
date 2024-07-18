import {
  OmitValue,
  TallDefaultVariants,
  TallSizes,
  TpositionDivider,
} from '../types';

export interface IDivider {
  className?: string;
  size?: TallSizes;
  position?: TpositionDivider;
  variant?: OmitValue<TallDefaultVariants, 'light'>;
}
