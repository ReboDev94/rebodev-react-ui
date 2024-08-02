import React from 'react';
import { twMerge } from 'tailwind-merge';
import { IModalHeader } from './interfaces';
import { IconX } from '../assets/svg';

const Header: React.FC<IModalHeader> = ({
  children,
  onClose,
  className = '',
  hiddenClose = false,
}) => {
  return (
    <div
      aria-label="Modal-Header"
      className={twMerge(
        'modal__header',
        !children && 'modal__only__button',
        className,
      )}
    >
      {children}
      {!hiddenClose && (
        <button
          aria-label='Close'
          type="button"
          className="px-2 py-1"
          onClick={() => onClose && onClose()}
        >
          <IconX className="fill-dark/80 h-5" />
        </button>
      )}
    </div>
  );
};

export default Header;
