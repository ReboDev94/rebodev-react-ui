import React from 'react';
import { IDivider } from './interfaces';
import { SIZE_XS, POSITION_HORIZONTAL, VARIANT_PRIMARY } from '../constants';
import { twMerge } from 'tailwind-merge';
import './Divider.styles.css';

const Divider: React.FC<IDivider> = ({
  className,
  variant = VARIANT_PRIMARY,
  size = SIZE_XS,
  position = POSITION_HORIZONTAL,
}) => {
  return (
    <div
      className={twMerge(
        'divider',
        `divider__${variant}`,
        `divider__${position}__${size}`,
        className,
      )}
    />
  );
};

export default Divider;
