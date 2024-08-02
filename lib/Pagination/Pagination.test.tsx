import { fireEvent, render, screen } from '@testing-library/react';
import PaginationItem from './PaginationItem';
import PaginationButton from './PaginationButton';
import Pagination from './Pagination';
import { TallDefaultVariants, TallPositions } from '../types';

const clickPaginationItem = vi.fn();
describe('PaginationItem', () => {
  test('should render', () => {
    render(
      <PaginationItem
        page={1}
        variant="primary"
        active
        onClick={clickPaginationItem}
      />,
    );
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });

  test('should render page', () => {
    render(
      <PaginationItem
        page={1}
        variant="primary"
        active
        onClick={clickPaginationItem}
      />,
    );
    const button = screen.getByRole('button');
    expect(button).toHaveTextContent('1');
  });

  test('should have default class', () => {
    render(
      <PaginationItem
        page={1}
        variant="primary"
        active
        onClick={clickPaginationItem}
      />,
    );
    const button = screen.getByRole('button');
    expect(button).toHaveClass('pagination__button pagination__item');
  });

  test('should have attribute type button', () => {
    render(
      <PaginationItem
        page={1}
        variant="primary"
        active
        onClick={clickPaginationItem}
      />,
    );
    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('type', 'button');
  });

  test.each([
    'primary',
    'secondary',
    'success',
    'error',
    'warning',
    'info',
    'dark',
  ] satisfies TallDefaultVariants[])(
    'should have active and variant class %s',
    variant => {
      render(
        <PaginationItem
          page={1}
          active
          variant={variant}
          onClick={clickPaginationItem}
        />,
      );
      const button = screen.getByRole('button');
      expect(button).toHaveClass(
        `pagination__item__${variant} pagination__item__active__${variant}`,
      );
    },
  );

  test('should alllow click', () => {
    render(
      <PaginationItem
        page={1}
        variant="primary"
        active
        onClick={clickPaginationItem}
      />,
    );
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(clickPaginationItem).toHaveBeenCalled();
  });
});

const clickPaginationButton = vi.fn();
describe('PaginationButton', () => {
  test('should render', () => {
    render(
      <PaginationButton
        label="Ant."
        variant="primary"
        positionArrow="left"
        disabled={false}
        onClick={clickPaginationButton}
      />,
    );
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });

  test('should render label', () => {
    render(
      <PaginationButton
        label="Ant."
        variant="primary"
        positionArrow="left"
        disabled={false}
        onClick={clickPaginationButton}
      />,
    );
    const button = screen.getByRole('button');
    expect(button).toHaveTextContent('Ant.');
  });

  test('should render only arrow icon', () => {
    const { container } = render(
      <PaginationButton
        label="Ant."
        variant="primary"
        positionArrow="left"
        disabled={false}
        onClick={clickPaginationButton}
      />,
    );
    const icon = container.querySelectorAll('svg');
    expect(icon).toHaveLength(1);
  });

  test('should be disabled', () => {
    render(
      <PaginationButton
        disabled
        label="Ant."
        variant="primary"
        positionArrow="left"
        onClick={clickPaginationButton}
      />,
    );
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
  });

  test('should have attribute type button', () => {
    render(
      <PaginationButton
        label="Ant."
        variant="primary"
        positionArrow="left"
        disabled={false}
        onClick={clickPaginationButton}
      />,
    );
    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('type', 'button');
  });

  test('should have default class', () => {
    render(
      <PaginationButton
        label="Ant."
        variant="primary"
        positionArrow="left"
        disabled={false}
        onClick={clickPaginationButton}
      />,
    );
    const button = screen.getByRole('button');
    expect(button).toHaveClass(
      'pagination__button pagination__button__navigation',
    );
  });

  test.each([
    'primary',
    'secondary',
    'success',
    'error',
    'warning',
    'info',
    'dark',
  ] satisfies TallDefaultVariants[])(
    'should have variant class %s',
    variant => {
      render(
        <PaginationButton
          label="Ant."
          variant={variant}
          positionArrow="left"
          disabled={false}
          onClick={clickPaginationButton}
        />,
      );
      const button = screen.getByRole('button');
      expect(button).toHaveClass(`pagination__button__navigation__${variant}`);
    },
  );

  test('icon should have default class', () => {
    const { container } = render(
      <PaginationButton
        label="Ant."
        variant="primary"
        positionArrow="left"
        disabled={false}
        onClick={clickPaginationButton}
      />,
    );
    const icon = container.querySelector('svg');
    expect(icon).toHaveClass('pagination__button__navigation__icon');
  });

  test.each([
    ['left', 'rotate-90'],
    ['right', '-rotate-90'],
  ] satisfies [TallPositions, string][])(
    'icon should have default position class',
    (a, b) => {
      const { container } = render(
        <PaginationButton
          label="Ant."
          variant="primary"
          positionArrow={a}
          disabled={false}
          onClick={clickPaginationButton}
        />,
      );
      const icon = container.querySelector('svg');
      expect(icon).toHaveClass(b);
    },
  );

  test('should allow click', () => {
    render(
      <PaginationButton
        label="Ant."
        variant="primary"
        positionArrow="left"
        disabled={false}
        onClick={clickPaginationButton}
      />,
    );
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(clickPaginationButton).toHaveBeenCalled();
  });
});

const changePagination = vi.fn();
describe('Pagination', () => {
  test('should render', () => {
    render(
      <Pagination pageCount={10} currentPage={1} onChange={changePagination} />,
    );
    const pagination = screen.getByLabelText('Pagination');
    expect(pagination).toBeInTheDocument();
  });

  test.each(Array.from({ length: 100 }, (_, index) => index + 1))(
    'should render five items pageCount %i',
    currentPage => {
      render(
        <Pagination
          pageCount={100}
          currentPage={currentPage}
          onChange={changePagination}
        />,
      );
      const items = screen.getAllByLabelText('Item');
      expect(items.length).toBe(5);
    },
  );

  test.each([1, 2, 3, 4])(
    'should render all items when pageCount < 5',
    pageCount => {
      render(
        <Pagination
          pageCount={pageCount}
          currentPage={1}
          onChange={changePagination}
        />,
      );
      const items = screen.getAllByLabelText('Item');
      expect(items.length).toBe(pageCount);
    },
  );

  test('should allow click next and previous button', () => {
    const next = vi.fn();
    render(
      <Pagination
        pageCount={10}
        currentPage={5}
        labelNext="Next"
        labelPrevious="Previous"
        onChange={next}
      />,
    );
    const item = screen.getByText(/3/i);
    const buttonNext = screen.getByText(/Next/i) as HTMLButtonElement;
    const buttonPrevious = screen.getByText(/Previous/i) as HTMLButtonElement;

    fireEvent.click(item);
    fireEvent.click(buttonNext);
    fireEvent.click(buttonPrevious);

    expect(next).toHaveBeenCalledTimes(3);
  });

  test('should throw error', () => {
    render(
      <Pagination
        pageCount={10}
        currentPage={100}
        onChange={changePagination}
      />,
    );
    const pagination = screen.queryByLabelText('Pagination');
    expect(pagination).not.toBeInTheDocument();
  });

  test('should not allow click next when currentPage is equal that pageCount', () => {
    const next = vi.fn();
    render(
      <Pagination
        pageCount={10}
        currentPage={10}
        labelNext="Next"
        labelPrevious="Previous"
        onChange={next}
      />,
    );
    const buttonNext = screen.getByText(/Next/i) as HTMLButtonElement;

    fireEvent.click(buttonNext);
    expect(next).toHaveBeenCalledTimes(0);
  });

  test('should not allow click previous when currentPage is equal that 1', () => {
    const next = vi.fn();
    render(
      <Pagination
        pageCount={10}
        currentPage={1}
        labelNext="Next"
        labelPrevious="Previous"
        onChange={next}
      />,
    );
    const buttonPrevious = screen.getByText(/Previous/i) as HTMLButtonElement;
    fireEvent.click(buttonPrevious);
    expect(next).toHaveBeenCalledTimes(0);
  });
});
