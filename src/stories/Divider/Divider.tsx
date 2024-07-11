import React from 'react';
import { IDivider, TDataDivider } from './interfaces';
import { SIZE_XS, VARIANT_BASE, POSITION_HORIZONTAL } from '../constants';
import { twMerge } from 'tailwind-merge';
import { DATA_DIVIDER, DEFAULT_DIVIDER_CLASSES, TYPE_DIVIDER } from './styles';

const Divider: React.FC<IDivider> = ({
  className,
  variant = VARIANT_BASE,
  size = SIZE_XS,
  position = POSITION_HORIZONTAL,
}) => {
  return (
    <div
      className={twMerge(
        DEFAULT_DIVIDER_CLASSES,
        TYPE_DIVIDER[variant],
        DATA_DIVIDER[
          `${position.toUpperCase()}_${size.toUpperCase()}_CLASSES` as TDataDivider
        ],
        className,
      )}
    />
  );
};

export default Divider;
