import React from 'react';
import { IHeader } from './interfaces';
import { twMerge } from 'tailwind-merge';

const SidebarHeader: React.FC<IHeader> = ({ children, className }) => {
  return (
    <div aria-label="Header" className={twMerge('sidebar__header', className)}>
      {children}
    </div>
  );
};

export default SidebarHeader;
