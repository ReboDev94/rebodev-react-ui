import React from 'react';
import { twMerge } from 'tailwind-merge';
import { IMenuItem } from './interfaces';
import { VARIANT_PRIMARY } from '../constants';

const MenuItem: React.FC<IMenuItem> = ({
  title,
  icon,
  className,
  variant = VARIANT_PRIMARY,
  active = false,
  onClick,
}) => {
  const Icon = icon;

  return (
    <li
      tabIndex={0}
      onClick={onClick}
      className={twMerge(
        'group',
        'menu__item__sidebar',
        `menu__item__${variant}`,
        active && `font-semibold menu__item__active__${variant}`,
        className,
      )}
    >
      <div aria-label="Icon" className={'menu__wrapper'}>
        {Icon && <Icon className={twMerge('menu__wrapper__icon')} />}
      </div>
      <span aria-label="Title" className={'menu__wrapper__title'}>
        {title}
      </span>
    </li>
  );
};

export default MenuItem;
