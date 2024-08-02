import React, { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { IMenuCollpse } from './interfaces';
import { ArrowDownIcon } from '../assets/svg';
import { VARIANT_PRIMARY } from '../constants';

const MenuCollapse: React.FC<IMenuCollpse> = ({
  title,
  icon,
  className,
  children,
  variant = VARIANT_PRIMARY,
}) => {
  const Icon = icon;
  const [isCollapse, setisCollapse] = useState(true);

  return (
    <li>
      <div
        aria-label="Collapse"
        onClick={() => setisCollapse(!isCollapse)}
        className={twMerge(
          'group',
          'menu__item__sidebar',
          `menu__item__${variant}`,
          className,
        )}
      >
        <div aria-label="Icon" className={'menu__wrapper'}>
          {Icon && <Icon className={twMerge('menu__wrapper__icon')} />}
        </div>
        <span aria-label="Title" className={'menu__wrapper__title'}>
          {title}
        </span>
        <ArrowDownIcon
          data-testid="IconArrow"
          className={twMerge('menu__wrapper__icon')}
        />
      </div>
      <div
        aria-label='Items'
        className={twMerge('menu__wrapper__collapse', isCollapse && 'hidden')}
      >
        {children}
      </div>
    </li>
  );
};

export default MenuCollapse;
