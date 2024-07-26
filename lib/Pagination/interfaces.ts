import { ButtonHTMLAttributes } from 'react';
import { OmitValue, TallDefaultVariants } from '../types';

type Variant = OmitValue<TallDefaultVariants, 'light'>;
export interface IPagination {
  pageCount: number;
  currentPage: number;
  onChange: (page: number) => void;
  variant?: Variant;
  visiblePages?: number;
}

export interface IPaginationItem
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  page: number;
  variant: Variant;
  active?: boolean;
}

export interface IPaginationButton
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
  positionArrow: 'right' | 'left';
  variant: Variant;
}
