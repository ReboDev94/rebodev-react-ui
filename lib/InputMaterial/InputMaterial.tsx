import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { IInputMaterial } from './interfaces';
import { SIZE_SM, VARIANT_PRIMARY } from '../constants';
import Input from '../Input';
import './InputMaterial.styles.css';

const InputMaterial = forwardRef<HTMLInputElement, IInputMaterial>(
  (props, ref) => {
    const {
      id,
      title,
      size = SIZE_SM,
      variant = VARIANT_PRIMARY,
      ...rest
    } = props;

    return (
      <div data-testid="wrapper-input-material" className="relative">
        <Input
          ref={ref}
          id={id}
          placeholder=" "
          type="text"
          size={size}
          variant={variant}
          {...rest}
        />
        <label
          htmlFor={id}
          className={twMerge('input__material', `input__material__${variant}`)}
        >
          {title}
        </label>
      </div>
    );
  },
);
InputMaterial.displayName = 'InputMaterial';
export default InputMaterial;
