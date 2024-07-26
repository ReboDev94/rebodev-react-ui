import React from 'react';
import { twMerge } from 'tailwind-merge';
import { ILoading } from './interfaces';
import { SIZE_XS, VARIANT_PRIMARY } from '../constants';
import './Loading.styles.css';

const Loading: React.FC<ILoading> = ({
  className,
  variant = VARIANT_PRIMARY,
  size = SIZE_XS,
}) => {
  return (
    <div
      className={twMerge(
        'loading',
        `loading__${size}`,
        `loading__${variant}`,
        className,
      )}
    />
  );
};

export default Loading;
