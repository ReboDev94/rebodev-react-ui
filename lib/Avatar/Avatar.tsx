import React, { useState } from 'react';
import { IAvatar } from './interfaces';
import { twMerge } from 'tailwind-merge';
import { SHAPE_CIRCLE, SIZE_SM, VARIANT_PRIMARY } from '../constants';
import './avatar.styles.css';

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
      aria-label="avatar"
      className={twMerge(
        'avatar',
        `avatar__${shape}`,
        `avatar__${size}`,
        border && 'avatar__bordered',
        !loadImg && `avatar__${variant}`,
        className,
      )}
    >
      {children && !loadImg && children}
      {!children && !loadImg && <span aria-label="title">{title}</span>}
      <img
        src={src}
        className={twMerge(
          'rounded-[inherit] object-fill',
          `avatar__${size}`,
          !loadImg && 'hidden',
        )}
        alt="avatar-img"
        onLoad={onLoadImg}
      />
    </div>
  );
};
export default Avatar;
