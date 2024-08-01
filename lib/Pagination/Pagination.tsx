import React, { useMemo } from 'react';
import { twMerge } from 'tailwind-merge';
import { IPagination } from './interfaces';
import PaginationItem from './PaginationItem';
import PaginationButton from './PaginationButton';
import { VARIANT_PRIMARY } from '../constants/variants';
import './Pagination.styles.css';

const Pagination: React.FC<IPagination> = ({
  currentPage = 1,
  pageCount = 1,
  labelNext = 'Sig.',
  labelPrevious = 'Ant.',
  variant = VARIANT_PRIMARY,
  onChange,
}) => {
  if (currentPage > pageCount) return null;

  const previuosPage = () => {
    if (currentPage !== 1) onChange(currentPage - 1);
  };

  const hasPreviousPage = useMemo(
    () => currentPage > 1 && pageCount > 1,
    [currentPage, pageCount],
  );

  const hasNextPage = useMemo(
    () => currentPage < pageCount && pageCount > 1,
    [currentPage, pageCount],
  );

  const nextPage = () => {
    if (currentPage !== pageCount) onChange(currentPage + 1);
  };

  const setPage = (page: number) => {
    if (page !== currentPage) onChange(page);
  };

  const endPage = Math.min(Math.max(currentPage + 2, 5), pageCount);
  const startPage = Math.max(1, endPage - 4);

  const pages = useMemo(() => {
    const elements: number[] = [];
    for (let index = startPage; index <= endPage; index++) {
      elements.push(index);
    }
    return elements;
  }, [startPage, endPage]);

  return (
    <div aria-label="Pagination" className={twMerge('pagination')}>
      <PaginationButton
        disabled={!hasPreviousPage}
        variant={variant}
        positionArrow="left"
        onClick={previuosPage}
        label={labelPrevious}
      />
      {pages.map(el => (
        <PaginationItem
          key={el}
          page={el}
          variant={variant}
          active={currentPage === el}
          onClick={() => setPage(el)}
        />
      ))}
      <PaginationButton
        disabled={!hasNextPage}
        variant={variant}
        positionArrow="right"
        onClick={nextPage}
        label={labelNext}
      />
    </div>
  );
};

export default Pagination;
