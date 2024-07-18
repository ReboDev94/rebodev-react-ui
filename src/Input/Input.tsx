import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { VARIANT_PRIMARY, SIZE_SM } from '../constants';
import '../shared/input/input.styles.css';
import { Iinput } from '.';

const Input = forwardRef<HTMLInputElement, Iinput>((props, ref) => {
  const {
    type,
    className,
    size = SIZE_SM,
    variant = VARIANT_PRIMARY,
    ...rest
  } = props;

  return (
    <input
      ref={ref}
      type={type}
      className={
        twMerge(
          'peer',
          'input',
          `input__${size}`,
          `input__${variant}`,
          type === 'file' && 'input__file',
          className,
        )
      }
      {...rest}
    />
  );
});

Input.displayName = 'Input';
export default Input;
