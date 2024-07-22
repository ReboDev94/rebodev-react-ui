import React, { FC, ReactNode, SVGProps } from 'react';
import { TallDefaultVariants } from '../types';

export interface IMenu extends React.HTMLAttributes<HTMLUListElement> {}

export interface IItemSidebar {
  title: string;
  variant?: TallDefaultVariants;
  className?: string;
  icon?: FC<SVGProps<SVGSVGElement>>;
  active?: boolean;
  onClick?: () => void;
}

export interface ICollapseSidebar extends Omit<IItemSidebar, 'active'> {
  children: ReactNode;
}
