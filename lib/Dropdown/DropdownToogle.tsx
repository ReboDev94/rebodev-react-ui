import React from 'react';
import { twMerge } from 'tailwind-merge';
import { IDropdownToogle } from './interfaces';
import Button from '../Button';

const DropdownToogle = React.forwardRef<HTMLLabelElement, IDropdownToogle>(
  (
    { children, disabled = false, button = true, buttonProps, ...props },
    ref,
  ) => {
    return (
      <label
        ref={ref}
        aria-label="DropDown-Toggle"
        tabIndex={disabled ? undefined : 0}
        className={twMerge('dropdown__toggle')}
        {...props}
      >
        {button ? (
          <Button
            aria-label="Button-Toggle"
            disabled={disabled}
            {...buttonProps}
          >
            {children}
          </Button>
        ) : (
          children
        )}
      </label>
    );
  },
);
DropdownToogle.displayName = 'DropdownToogle';

export default DropdownToogle;
