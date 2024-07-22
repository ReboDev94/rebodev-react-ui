import React from 'react';
import { twMerge } from 'tailwind-merge';
import { IMenu } from './interfaces';
import './Menu.styles.css';

const Menu: React.FC<IMenu> = ({ className, ...props }) => {
  return <ul className={twMerge('menu', className)} {...props} />;
};

export default Menu;
