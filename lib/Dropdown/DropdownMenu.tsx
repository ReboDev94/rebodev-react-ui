import React from 'react';
import { twMerge } from 'tailwind-merge';
import { IDropdownMenu } from './interfaces';
import { ALING_START, POSITION_BOTTOM, POSITION_TOP } from '../constants';

const DropdownMenu: React.FC<IDropdownMenu> = ({
  position = POSITION_BOTTOM,
  align = ALING_START,
  className,
  ...props
}) => {
  return (
    <ul
      tabIndex={0}
      className={twMerge(
        'dropdown__menu',
        `dropdown__menu__${position}`,
        [POSITION_TOP, POSITION_BOTTOM].includes(position)
          ? `dropdown__menu__vertical__${align}`
          : `dropdown__menu__lateral__${align}`,
        className,
      )}
      {...props}
    />
  );
};

export default DropdownMenu;
