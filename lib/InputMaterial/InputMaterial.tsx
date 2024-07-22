import React from 'react';
import { twMerge } from 'tailwind-merge';
import { IInputMaterial } from './interfaces';
import { VARIANT_PRIMARY } from '../constants';
import './InputMaterial.styles.css';

const InputMaterial: React.FC<IInputMaterial> = ({
  id,
  children,
  title,
  variant = VARIANT_PRIMARY,
}) => {
  return (
    <div className="relative">
      {children}
      <label
        htmlFor={id}
        className={twMerge('input__material', `input__material__${variant}`)}
      >
        {title}
      </label>
    </div>
  );
};

export default InputMaterial;
