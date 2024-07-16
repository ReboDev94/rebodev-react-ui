import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { SIZE_XS, VARIANT_PRIMARY } from '../constants';
import { IRadio } from './interfaces';
import { RADIO_CLASSES, SIZE_RADIO, VARIANT_RADIO } from './styles';

const Radio = forwardRef<HTMLInputElement, IRadio>((props, ref) => {
  const {
    id,
    className,
    variant = VARIANT_PRIMARY,
    sizeRadio = SIZE_XS,
    ...rest
  } = props;

  return (
    <input
      id={id}
      ref={ref}
      type="radio"
      className={twMerge(
        RADIO_CLASSES,
        SIZE_RADIO[sizeRadio],
        VARIANT_RADIO[variant],
        className,
      )}
      {...rest}
    />
  );
});

Radio.displayName = 'Radio';

export default Radio;
