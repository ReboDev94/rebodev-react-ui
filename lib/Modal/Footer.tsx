import React from 'react';
import { IModalFooter } from './interfaces';
import { twMerge } from 'tailwind-merge';

const Footer: React.FC<IModalFooter> = ({ children, className }) => {
  return (
    <div
      aria-label="Modal-Footer"
      className={twMerge('modal__footer', className)}
    >
      {children}
    </div>
  );
};

export default Footer;
