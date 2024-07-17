import { FormHTMLAttributes, ReactNode } from 'react';
import { IButton } from '../Button/interfaces';
import { TallAlings, TallPositions } from '../types';

export interface IDropdown extends FormHTMLAttributes<HTMLDivElement> {
  disabled?: boolean;
}

export type buttonToogle = Pick<IButton, 'variant' | 'block' | 'size' | 'className'>;

export interface IDropdownToogle {
  disabled?: boolean;
  children: ReactNode;
  button?: boolean;
  buttonProps?: buttonToogle;
}

export interface IDropdownMenu extends React.HTMLAttributes<HTMLUListElement> {
  position?: TallPositions;
  align?: TallAlings;
}
export interface IDropdownItem {
  disabled?: boolean;
  onClick?: () => void;
  children: ReactNode;
  className?: string;
}

export interface IDropdownDivider {
  className?: string;
}
