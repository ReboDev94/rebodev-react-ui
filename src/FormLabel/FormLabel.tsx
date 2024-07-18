import React from 'react';
import { twMerge } from 'tailwind-merge';
import {
  POSITION_LB,
  POSITION_LT,
  POSITION_RB,
  POSITION_RT,
} from '../constants';
import { IFormLabel } from './interfaces';
import './FormLabel.styles.css';

const FormLabel: React.FC<IFormLabel> = ({
  title,
  children,
  className,
  position = POSITION_LT,
}) => {
  return (
    <div className={twMerge('form__label__wrapper', className)}>
      {[POSITION_RT, POSITION_LT].includes(position) && (
        <label
          className={twMerge(
            'form__label',
            'pb-1',
            position === POSITION_RT && 'form__label__right',
          )}
        >
          {title}
        </label>
      )}

      {children}

      {[POSITION_RB, POSITION_LB].includes(position) && (
        <label
          className={twMerge(
            'form__label',
            'pt-1',
            position === POSITION_RB && 'form__label__right',
          )}
        >
          {title}
        </label>
      )}
    </div>
  );
};

export default FormLabel;
