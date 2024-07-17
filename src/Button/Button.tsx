import React from 'react';
import { twMerge, twJoin } from 'tailwind-merge';
import { IButton } from './interfaces';
import { SIZE_SM, VARIANT_PRIMARY } from '../constants';
import './Button.styles.css';

const Button: React.FC<IButton> = ({
  children,
  className,
  variant = VARIANT_PRIMARY,
  size = SIZE_SM,
  block = false,
  ...props
}) => {
  return (
    <button
      className={twMerge(
        twJoin(
          'button',
          `button__${variant}`,
          `button__${size}`,
          block && 'button__block',
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
