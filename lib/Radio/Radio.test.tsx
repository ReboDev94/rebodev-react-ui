import { fireEvent, render, screen } from '@testing-library/react';
import Radio from './Radio';
import { TallDefaultVariants, TallSizes } from '../types';
import { createRef } from 'react';

describe('Radio', () => {
  test('should render', () => {
    render(<Radio />);
    const radio = screen.getByRole('radio');
    expect(radio).toBeInTheDocument();
  });

  test('should attribute type radio', () => {
    render(<Radio />);
    const radio = screen.getByRole('radio');
    expect(radio).toHaveAttribute('type', 'radio');
  });

  test('should have default class', () => {
    render(<Radio className="custom-class" />);
    const radio = screen.getByRole('radio');
    expect(radio).toHaveClass('radio custom-class');
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
      render(<Radio variant={variant} />);
      const radio = screen.getByRole('radio');
      expect(radio).toHaveClass(`radio__${variant}`);
    },
  );

  test.each(['xs', 'sm', 'md', 'lg'] satisfies TallSizes[])(
    'should have size class %s',
    size => {
      render(<Radio size={size} />);
      const radio = screen.getByRole('radio');
      expect(radio).toHaveClass(`radio__${size}`);
    },
  );

  test('should be checked', () => {
    render(<Radio defaultChecked />);
    const radio = screen.getByRole('radio');
    expect(radio).toBeChecked();
  });

  test('should be checked on onclick', () => {
    render(<Radio />);
    const radio = screen.getByRole('radio');
    fireEvent.click(radio);
    expect(radio).toBeChecked();
  });

  test('hould forward the ref to the radio element', () => {
    const ref = createRef<HTMLInputElement>();
    render(<Radio ref={ref} />);
    expect(ref.current).toBeInTheDocument();
  });
});
