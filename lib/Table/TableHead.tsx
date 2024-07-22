import React from 'react';
import { ITableHead } from './interfaces';
import { twMerge } from 'tailwind-merge';

const TableHead = React.forwardRef<HTMLTableSectionElement, ITableHead>(
  ({ children, className, ...props }, ref) => {
    return (
      <thead ref={ref} className={twMerge('table__head', className)} {...props}>
        <tr>
          {Array.isArray(children) ? (
            children.map((child, i) => (
              <th key={i} scope="rol" className={'table__th'}>
                {child}
              </th>
            ))
          ) : (
            <th scope="rol" className={'table__th'}>
              {children}
            </th>
          )}
        </tr>
      </thead>
    );
  },
);

TableHead.displayName = 'Thead';

export default TableHead;
