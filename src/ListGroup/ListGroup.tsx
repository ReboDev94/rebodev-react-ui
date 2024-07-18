import React from 'react';
import { twMerge } from 'tailwind-merge';
import { IListGroup } from './interfaces';
import './ListGroup.styles.css';

const ListGroup: React.FC<IListGroup> = ({ className, ...props }) => {
  return (
    <ul role="list" className={twMerge('list__group', className)} {...props} />
  );
};

export default ListGroup;
