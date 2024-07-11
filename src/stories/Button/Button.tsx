import React from 'react';
import { twMerge, twJoin } from 'tailwind-merge';
import {
  BASE_BUTTON_CLASSES,
  BLOCK_BUTTON_CLASSES,
  SIZE_BTNS,
  TYPE_BTNS,
} from './styles';
import { IButton } from './interfaces';
import { SIZE_MD, VARIANT_PRIMARY } from '../constants';

const Button: React.FC<IButton> = ({
  variant = VARIANT_PRIMARY,
  size = SIZE_MD,
  block = false,
  children,
  className,
  ...props
}) => {
  return (
    <button
      className={twMerge(
        twJoin(
          BASE_BUTTON_CLASSES,
          TYPE_BTNS[variant],
          SIZE_BTNS[size],
          block && BLOCK_BUTTON_CLASSES,
          className,
        ),
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
