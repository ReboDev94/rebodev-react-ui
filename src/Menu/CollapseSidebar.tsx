import React, { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { ICollapseSidebar } from './interfaces';
import { ArrowDownIcon } from '../assets/svg';
import { VARIANT_PRIMARY } from '../constants';

const CollapseSidebar: React.FC<ICollapseSidebar> = ({
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
        onClick={() => {
          setisCollapse(!isCollapse);
        }}
        className={twMerge(
          'group',
          'menu__item__sidebar',
          `menu__item__${variant}`,
          className,
        )}
      >
        <div className={'menu__wrapper'}>
          {Icon && <Icon className={twMerge('menu__wrapper__icon')} />}
        </div>
        <span className={'menu__wrapper__title'}>{title}</span>
        <ArrowDownIcon className={twMerge('menu__wrapper__icon')} />
      </div>
      <div
        className={twMerge('menu__wrapper__collapse', isCollapse && 'hidden')}
      >
        {children}
      </div>
    </li>
  );
};

export default CollapseSidebar;
