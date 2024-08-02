import { OmitValue, TallDefaultVariants } from '../types';

type Variant = OmitValue<TallDefaultVariants, 'light'>;
export interface IPagination {
  pageCount: number;
  currentPage: number;
  onChange: (page: number) => void;
  labelPrevious?: string;
  labelNext?: string;
  variant?: Variant;
}

export interface IPaginationItem {
  page: number;
  variant: Variant;
  active: boolean;
  onClick: () => void;
}

export interface IPaginationButton {
  label: string;
  positionArrow: 'right' | 'left';
  variant: Variant;
  disabled: boolean;
  onClick: () => void;
}
