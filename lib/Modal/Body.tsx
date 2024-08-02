import React from 'react';
import { twMerge } from 'tailwind-merge';
import { IModalBody } from './interfaces';

const Body: React.FC<IModalBody> = ({ children, className }) => {
  return <div aria-label='Modal-Body' className={twMerge('p-4', className)}>{children}</div>;
};

export default Body;
