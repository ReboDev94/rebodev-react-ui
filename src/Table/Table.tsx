import React from 'react';
import { ITable } from './interfaces';
import { twMerge } from 'tailwind-merge';
import './Table.styles.css';

const Table = React.forwardRef<HTMLTableElement, ITable>(
  ({ className, wrapperClassName, wrapperStyle, children, ...props }, ref) => {
    return (
      <div
        style={wrapperStyle}
        className={twMerge('table__wrapper', wrapperClassName)}
      >
        <table ref={ref} {...props} className={twMerge('table', className)}>
          {children}
        </table>
      </div>
    );
  },
);

Table.displayName = 'Table';

export default Table;
