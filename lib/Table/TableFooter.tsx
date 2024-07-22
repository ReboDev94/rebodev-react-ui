import React from 'react';
import { ITableBody } from './interfaces';
import { twMerge } from 'tailwind-merge';

const TableFooter = React.forwardRef<HTMLTableSectionElement, ITableBody>(
  ({ divide = false, children, className, ...props }, ref) => {
    return (
      <tfoot
        ref={ref}
        className={twMerge(divide && 'table__divider', className)}
        {...props}
      >
        {children}
      </tfoot>
    );
  },
);

TableFooter.displayName = 'Tfoot';
export default TableFooter;
