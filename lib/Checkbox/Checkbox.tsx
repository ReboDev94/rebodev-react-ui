import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { ICheckBox } from './interfaces';
import { VARIANT_PRIMARY, SIZE_XS } from '../constants';
import { IconCheckList } from '../assets/svg';
import './Checkbox.styles.css';

const Checkbox = forwardRef<HTMLInputElement, ICheckBox>((props, ref) => {
  const {
    id,
    className,
    variant = VARIANT_PRIMARY,
    size = SIZE_XS,
    ...rest
  } = props;

  return (
    <label
      aria-label="Checkbox-Label"
      className={twMerge('checkbox__label', `checkbox__${size}`)}
      htmlFor={id}
    >
      <input
        id={id}
        ref={ref}
        aria-label="Checkbox"
        type="checkbox"
        className={twMerge(
          'peer',
          'checkbox',
          `checkbox__${size}`,
          `checkbox__${variant}`,
          className,
        )}
        {...rest}
      />
      <span
        aria-label="Checkbox-Icon"
        className={twMerge('checkbox__wrapper__icon', `checkbox__${size}`)}
      >
        <IconCheckList />
      </span>
    </label>
  );
});

Checkbox.displayName = 'Checkbox';

export default Checkbox;
