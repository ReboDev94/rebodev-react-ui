import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { SIZE_XS, VARIANT_PRIMARY } from '../constants';
import { IRadio } from './interfaces';
import './Radio.styles.css';

const Radio = forwardRef<HTMLInputElement, IRadio>((props, ref) => {
  const {
    id,
    className,
    variant = VARIANT_PRIMARY,
    size = SIZE_XS,
    ...rest
  } = props;

  return (
    <input
      id={id}
      ref={ref}
      type="radio"
      className={twMerge(
        'radio',
        `radio__${size}`,
        `radio__${variant}`,
        className,
      )}
      {...rest}
    />
  );
});

Radio.displayName = 'Radio';

export default Radio;
