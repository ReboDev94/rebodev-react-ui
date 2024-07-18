import React from 'react';
import { IItemSidebar } from './interfaces';
import { twMerge } from 'tailwind-merge';
import { VARIANT_PRIMARY } from '../constants';

const ItemSidebar: React.FC<IItemSidebar> = ({
  title,
  icon,
  className,
  variant = VARIANT_PRIMARY,
  active = false,
  onClick = () => {
    /*  */
  },
}) => {
  const Icon = icon;

  return (
    <li>
      <div
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
        <div className={'menu__wrapper'}>
          {Icon && <Icon className={twMerge('menu__wrapper__icon')} />}
        </div>
        <span className={'menu__wrapper__title'}>{title}</span>
      </div>
    </li>
  );
};

export default ItemSidebar;
