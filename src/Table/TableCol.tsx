import { HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

const TableCol = <PROPS extends HTMLAttributes<HTMLTableCellElement>>({
  children,
  className,
  ...props
}: PROPS) => (
  <td className={twMerge('table__col', className)} {...props}>
    {children}
  </td>
);

export default TableCol;
