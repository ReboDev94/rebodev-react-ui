import { FC, ReactNode, SVGProps } from 'react';
import { TallDefaultVariants } from '../types';

export interface IListGroup extends React.HTMLAttributes<HTMLUListElement> {}

export interface IItemListGroup {
  icon?: FC<SVGProps<SVGSVGElement>>;
  variant?: TallDefaultVariants;
  className?: string;
  children: ReactNode;
}
