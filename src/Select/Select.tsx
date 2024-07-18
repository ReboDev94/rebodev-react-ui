import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { SIZE_MD, VARIANT_PRIMARY } from '../constants';
import { ISelect } from './interfaces';
import '../shared/input/input.styles.css';

const Select = forwardRef<HTMLSelectElement, ISelect>((props, ref) => {
  const {
    children,
    className,
    size = SIZE_MD,
    variant = VARIANT_PRIMARY,
    ...rest
  } = props;

  return (
    <select
      ref={ref}
      className={twMerge(
        'input',
        `input__${size}`,
        `input__${variant}`,
        className,
      )}
      {...rest}
    >
      {children}
    </select>
  );
});

Select.displayName = 'Select';

export default Select;
