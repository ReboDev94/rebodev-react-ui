import React from 'react';
import { IHeader } from './interfaces';
import { twMerge } from 'tailwind-merge';

const SidebarHeader: React.FC<IHeader> = ({ children, className }) => {
  return (
    <div className={twMerge('sidebar__footer', className)}>{children}</div>
  );
};

export default SidebarHeader;
