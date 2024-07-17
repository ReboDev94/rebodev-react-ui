import React, { useMemo } from 'react';
import { twMerge } from 'tailwind-merge';
import { IFormGroupMaterial } from './interfaces';
import { BASE_LABEL_CLASSES } from './styles';
import { VARIANT_ERROR, VARIANT_PRIMARY } from '../constants';
import { VARIANT_INPUT_LABEL } from '../shared/styles/inputStyles';

const FormGroupMaterial: React.FC<IFormGroupMaterial> = ({
  id,
  children,
  title,
  errorState = false,
  variant = VARIANT_PRIMARY,
}) => {
  const variantClasses = useMemo(
    () => VARIANT_INPUT_LABEL[errorState ? VARIANT_ERROR : variant],
    [errorState, variant],
  );

  return (
    <div className="relative">
      {children}
      <label
        htmlFor={id}
        className={twMerge(BASE_LABEL_CLASSES, variantClasses)}
      >
        {title}
      </label>
    </div>
  );
};

export default FormGroupMaterial;
