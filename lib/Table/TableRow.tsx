import React from 'react';
import { twMerge } from 'tailwind-merge';
import { ITableRow } from './interfaces';

const TableRow = React.forwardRef<HTMLTableRowElement, ITableRow>(
  ({ children, className, hover = false, ...props }, ref) => {
    return (
      <tr
        ref={ref}
        className={twMerge(hover && 'table__hover', className)}
        {...props}
      >
        {children}
      </tr>
    );
  },
);

TableRow.displayName = 'Tr';
export default TableRow;
