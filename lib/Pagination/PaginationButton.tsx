import React from 'react';
import { IPaginationButton } from './interfaces';
import { twMerge } from 'tailwind-merge';
import { ArrowDownIcon } from '../assets/svg';

const PaginationButton: React.FC<IPaginationButton> = ({
  label,
  variant,
  positionArrow,
  disabled,
  onClick,
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={twMerge(
        'pagination__button',
        'pagination__button__navigation',
        `pagination__button__navigation__${variant}`,
      )}
    >
      {positionArrow === 'left' && (
        <ArrowDownIcon
          className={twMerge(
            'rotate-90',
            'pagination__button__navigation__icon',
          )}
        />
      )}
      {label}
      {positionArrow === 'right' && (
        <ArrowDownIcon
          className={twMerge(
            '-rotate-90',
            'pagination__button__navigation__icon',
          )}
        />
      )}
    </button>
  );
};

export default PaginationButton;
