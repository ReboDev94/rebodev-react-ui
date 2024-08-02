import React from 'react';
import { ITableBody } from './interfaces';
import { twMerge } from 'tailwind-merge';

const TableBody = React.forwardRef<HTMLTableSectionElement, ITableBody>(
  (
    {
      children,
      className,
      labelNoInformation = 'No hay información',
      divide = false,
      ...props
    },
    ref,
  ) => {
    return (
      <tbody
        ref={ref}
        className={twMerge(divide && 'table__divider', className)}
        {...props}
      >
        {!children && (
          <tr>
            <td colSpan={1000} className="h-20 text-center font-semibold">
              {labelNoInformation}
            </td>
          </tr>
        )}
        {children}
      </tbody>
    );
  },
);

TableBody.displayName = 'Thead';
export default TableBody;
