import React from 'react';
import { twMerge } from 'tailwind-merge';
import { IDropdown } from './interfaces';
import './Dropdown.styles.css';

const Dropdown = React.forwardRef<HTMLDivElement, IDropdown>(
  ({ className, ...props }, ref) => {
    return (
      <div
        role="listbox"
        ref={ref}
        className={twMerge('group', 'dropdown', className)}
        {...props}
      />
    );
  },
);

Dropdown.displayName = 'Dropdown';

export default Dropdown;
