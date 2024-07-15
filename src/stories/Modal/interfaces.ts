import { ReactNode } from 'react';
import { ALL_SIZES } from '../constants';

type modalSize = (typeof ALL_SIZES)[number];

export interface IModal {
  value?: boolean;
  size?: modalSize;
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
