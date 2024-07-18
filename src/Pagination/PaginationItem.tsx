import React from 'react';
import { twMerge } from 'tailwind-merge';
import { IPaginationItem } from './interfaces';

const PaginationItem: React.FC<IPaginationItem> = ({
  page,
  variant,
  active = false,
  ...rest
}) => {
  return (
    <button
      {...rest}
      className={twMerge(
        'pagination__button',
        'pagination__item',
        `pagination__item__${variant}`,
        active && `pagination__item__active__${variant}`,
      )}
    >
      {page}
    </button>
  );
};

export default PaginationItem;
