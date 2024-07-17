import React from 'react';
import { twMerge } from 'tailwind-merge';
import { IDropdownDivider } from './interfaces';

const DropdownDivider: React.FC<IDropdownDivider> = ({ className }) => {
  return (
    <div className={twMerge('dropdown__wrapper__divider', className)}>
      <hr className={twMerge('dropdown__divider')} />
    </div>
  );
};

export default DropdownDivider;
