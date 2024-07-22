import { ReactNode } from 'react';
import { TallSizes } from '../types';

export interface IModal {
  value?: boolean;
  size?: TallSizes;
  backdrop?: boolean;
  className?: string;
  center?: boolean;
  children: ReactNode;
}

export interface IModalHeader {
  className?: string;
  hiddenClose?: boolean;
  children?: ReactNode;
  onClose?: () => void;
}

export interface IModalBody {
  className?: string;
  children?: ReactNode;
}

export interface IModalFooter {
  className?: string;
  children?: ReactNode;
}
