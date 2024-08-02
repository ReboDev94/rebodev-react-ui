import React from 'react';
import { twMerge } from 'tailwind-merge';
import { ITableCol } from './interfaces';

const TableCol = React.forwardRef<HTMLTableCellElement, ITableCol>(
  ({ children, className, ...props }, ref) => {
    return (
      <td
        ref={ref}
        className={twMerge('table__col', className)}
        {...props}
      >
        {children}
      </td>
    );
  },
);
TableCol.displayName = 'Td';
export default TableCol;
