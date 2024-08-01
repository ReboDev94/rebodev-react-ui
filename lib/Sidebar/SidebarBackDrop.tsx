import React from 'react';
import { twMerge } from 'tailwind-merge';
import { IBackDrop } from './interfaces';

const SidebarBackDrop: React.FC<IBackDrop> = ({ className, onClick }) => {
  return (
    <div
      aria-label='BackDrop'
      onClick={onClick}
      className={twMerge('sidebar__backdrop', className)}
    ></div>
  );
};

export default SidebarBackDrop;
