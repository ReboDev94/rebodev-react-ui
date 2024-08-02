import TableComponent from './Table';
import TableBody from './TableBody';
import TableFooter from './TableFooter';
import TableHead from './TableHead';
import TableRow from './TableRow';
import TableCol from './TableCol';
import {
  ITable,
  ITableBody,
  ITableHead,
  ITableRow,
  ITableCol,
} from './interfaces';

const Table = Object.assign(TableComponent, {
  Head: TableHead,
  Body: TableBody,
  Row: TableRow,
  Col: TableCol,
  Footer: TableFooter,
});

export default Table;
export type { ITable, ITableHead, ITableRow, ITableCol, ITableBody };
