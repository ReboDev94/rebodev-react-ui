import React from 'react';
import { twMerge } from 'tailwind-merge';
import { ICategory } from './interfaces';

const SidebarCategory: React.FC<ICategory> = ({
  title,
  tag = 'h1',
  className,
}) => {
  const Tag = tag;
  return <Tag className={twMerge('sidebar__category', className)}>{title}</Tag>;
};

export default SidebarCategory;
