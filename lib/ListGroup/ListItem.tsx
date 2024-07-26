import React from 'react';
import { twMerge } from 'tailwind-merge';
import { IItemListGroup } from './interfaces';
import { VARIANT_PRIMARY } from '../constants';

const ListItem: React.FC<IItemListGroup> = ({
  icon,
  children,
  className,
  variant = VARIANT_PRIMARY,
}) => {
  const Icon = icon;
  return (
    <li
      aria-label='listitem'
      className={twMerge(
        'group',
        'list__group__item',
        `list__group__item__${variant}`,
        className,
      )}
    >
      <div aria-label='Wrapper-Icon' className={'list__group__item__wrapper'}>
        {Icon && (
          <Icon className={twMerge('list__group__item__wrapper__icon')} />
        )}
        {children}
      </div>
    </li>
  );
};

export default ListItem;
