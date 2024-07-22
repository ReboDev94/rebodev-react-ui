import React from 'react';
import { twMerge } from 'tailwind-merge';
import { IDropdownItem } from './interfaces';

const DropdownItem: React.FC<IDropdownItem> = ({
  children,
  className,
  onClick,
  disabled = false,
}) => {
  return (
    <li
      role="menuitem"
      tabIndex={0}
      onClick={() => !disabled && onClick && onClick()}
      className={twMerge(
        'dropdown__item__li',
        disabled && 'dropdown__item__li__disabled',
        className,
      )}
    >
      {children}
    </li>
  );
};

export default DropdownItem;
