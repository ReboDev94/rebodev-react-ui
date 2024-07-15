import { ReactNode } from 'react';
import { VARIANT_DEFAULT, VARIANT_PRIMARY } from '../constants';

export const VARIANTS_CARD = [VARIANT_DEFAULT, VARIANT_PRIMARY] as const;
export type VariantCard = (typeof VARIANTS_CARD)[number];

export interface ICard {
  variant?: VariantCard;
  className?: string;
  children?: ReactNode;
  bordered?: boolean;
}

export interface ICardBody {
  children: ReactNode;
  className?: string;
}
