import React, { ReactNode, TdHTMLAttributes } from 'react';

export interface ITable extends React.TableHTMLAttributes<HTMLTableElement> {
  wrapperClassName?: string;
  wrapperStyle?: React.CSSProperties;
}

export interface ITableHead
  extends React.TableHTMLAttributes<HTMLTableSectionElement> {
  children?: ReactNode[] | ReactNode;
}

export interface ITableBody
  extends React.TableHTMLAttributes<HTMLTableSectionElement> {
  divide?: boolean;
  labelNoInformation?: string;
}

export interface ITableRow
  extends React.TableHTMLAttributes<HTMLTableRowElement> {
  hover?: boolean;
  children?: ReactNode[] | ReactNode;
}

export interface ITableCol extends TdHTMLAttributes<HTMLTableCellElement> {}
