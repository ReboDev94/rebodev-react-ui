import { ReactNode } from 'react';
import { ALL_SHAPES, ALL_SIZES, VARIANT_BASE, VARIANT_PRIMARY } from '../constants';

export const VARIANTS_AVATAR = [VARIANT_PRIMARY, VARIANT_BASE] as const;

type SizeAvatar = (typeof ALL_SIZES)[number];
type ShapeAvatar = (typeof ALL_SHAPES)[number];
type VariantBorder = (typeof VARIANTS_AVATAR)[number];
type VariantBackGround = (typeof VARIANTS_AVATAR)[number];

export interface IAvatar {
  size?: SizeAvatar;
  shape?: ShapeAvatar;
  border?: boolean;
  borderVariant?: VariantBorder;
  bgVariant?: VariantBackGround;
  className?: string;
  title?: string;
  src?: string;
  children?: ReactNode;
}
