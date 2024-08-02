import React from 'react';
import { createPortal } from 'react-dom';
import { twMerge } from 'tailwind-merge';
import { IModal } from './interfaces';
import { SIZE_XS } from '../constants';
import BackDrop from './BackDrop';
import './Modal.styles.css';

const Modal: React.FC<IModal> = ({
  children,
  className,
  value = false,
  size = SIZE_XS,
  backdrop = true,
  center = false,
}) => {
  if (!value) return null;
  return createPortal(
    <>
      {backdrop && <BackDrop />}
      <div
        aria-label="Modal"
        className={twMerge('modal__container', className)}
      >
        <div
          aria-label="Modal-Wrapper"
          className={twMerge(
            'modal__wrapper',
            center && 'modal__wrapper__center',
          )}
        >
          <div
            aria-label="Modal-Container"
            className={twMerge(
              'modal',
              size === 'xs' && 'md:!w-2/6',
              size === 'sm' && 'md:!w-2/4',
              size === 'md' && 'md:!w-3/4',
              size === 'lg' && 'md:!w-full',
            )}
          >
            {children}
          </div>
        </div>
      </div>
    </>,
    document.body,
  );
};

export default Modal;
