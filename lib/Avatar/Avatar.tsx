import React, { useState } from 'react';
import { IAvatar } from './interfaces';
import { twMerge } from 'tailwind-merge';
import { SHAPE_CIRCLE, SIZE_SM, VARIANT_PRIMARY } from '../constants';
import './avatar.styles.css';
import { IconX } from '../assets/svg';

const Avatar: React.FC<IAvatar> = ({
  title,
  src,
  children,
  className,
  shape = SHAPE_CIRCLE,
  size = SIZE_SM,
  variant = VARIANT_PRIMARY,
  border = false,
}) => {
  const [loadImg, setloadImg] = useState(false);

  const onLoadImg = () => {
    setloadImg(true);
  };

  return (
    <div
      className={twMerge(
        'avatar',
        `avatar__${shape}`,
        `avatar__${size}`,
        border && 'avatar__bordered',
        !loadImg && `avatar__${variant}`,
        className,
      )}
    >
      <IconX />
      {children && !loadImg && children}
      {!children && !loadImg && <span>{title}</span>}
      <img
        src={src}
        className={twMerge(
          'rounded-[inherit] object-fill',
          `avatar__${size}`,
          !loadImg && 'hidden',
        )}
        onLoad={onLoadImg}
      />
    </div>
  );
};
export default Avatar;
