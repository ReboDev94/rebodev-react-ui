import React from 'react';
import { twMerge } from 'tailwind-merge';
import { ICard } from './interfaces';
import { VARIANT_PRIMARY } from '../constants';
import './Card.styles.css';

const Card: React.FC<ICard> = ({
  className,
  children,
  variant = VARIANT_PRIMARY,
}) => {
  return (
    <div
      className={twMerge(
        'card',
        `card__${variant}`,
        className,
      )}
    >
      {children}
    </div>
  );
};

export default Card;
