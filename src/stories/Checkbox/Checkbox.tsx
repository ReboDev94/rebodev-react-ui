import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { ICheckBox } from './interfaces';
import { VARIANT_PRIMARY, SIZE_SM } from '../constants';
import { CHECKBOX_CLASSES, SIZE_CHECKBOX, VARIANT_CHECKBOX, WRAPPER_CHECKBOX_CLASSES, WRAPPER_ICON } from './styles';
import { IconCheckList } from '../assets/svg';

const Checkbox = forwardRef<HTMLInputElement, ICheckBox>((props, ref) => {
  const { variant = VARIANT_PRIMARY, sizeCheck = SIZE_SM, id, className, ...rest } = props;

  return (
    <label className={twMerge(WRAPPER_CHECKBOX_CLASSES, SIZE_CHECKBOX[sizeCheck])} htmlFor={id}>
      <input
        id={id}
        ref={ref}
        type="checkbox"
        className={twMerge(CHECKBOX_CLASSES, SIZE_CHECKBOX[sizeCheck], VARIANT_CHECKBOX[variant], className)}
        {...rest}
      />
      <span className={WRAPPER_ICON}>
        <IconCheckList className={twMerge(SIZE_CHECKBOX[sizeCheck])} />
      </span>
    </label>
  );
});

Checkbox.displayName = 'Checkbox';

export default Checkbox;
