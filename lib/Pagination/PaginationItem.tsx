import React from 'react';
import { twMerge } from 'tailwind-merge';
import { IPaginationItem } from './interfaces';

const PaginationItem: React.FC<IPaginationItem> = ({
  page,
  variant,
  onClick,
  active = false,
}) => {
  return (
    <button
      aria-label="Item"
      type="button"
      onClick={onClick}
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
