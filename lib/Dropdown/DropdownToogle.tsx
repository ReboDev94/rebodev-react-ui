import React from 'react';
import { twMerge } from 'tailwind-merge';
import { IDropdownToogle } from './interfaces';
import Button from '../Button';

const DropdownToogle: React.FC<IDropdownToogle> = ({
  children,
  disabled = false,
  button = true,
  buttonProps,
}) => {
  return (
    <label
      tabIndex={disabled ? undefined : 0}
      className={twMerge('dropdown__toggle')}
    >
      {button ? (
        <Button {...buttonProps} disabled={disabled}>
          {children}
        </Button>
      ) : (
        children
      )}
    </label>
  );
};

export default DropdownToogle;
