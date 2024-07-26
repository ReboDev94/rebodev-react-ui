import { createRef } from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { TallDefaultVariants, TallSizes } from '../types';
import Input from '.';

describe('Input', () => {
  test('should render', () => {
    render(<Input />);
    const input = screen.getByRole('textbox');
    expect(input).toBeInTheDocument();
  });

  test('should forward ref to the input element', () => {
    const ref = createRef<HTMLInputElement>();
    render(<Input ref={ref} />);
    expect(ref.current).toBeInTheDocument();
  });

  test('should have only input', () => {
    render(<Input />);
    const input = screen.getAllByRole('textbox');
    expect(input).toHaveLength(1);
  });

  test('should input disabled', () => {
    render(<Input disabled />);
    const input = screen.getByRole('textbox');
    expect(input).toBeDisabled();
  });

  test('should call onChange', () => {
    const mockChange = vi.fn();
    render(<Input onChange={mockChange} />);
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'hola' } });
    expect(mockChange).toHaveBeenCalledOnce();
  });

  test('should forward the placeholder prop input', () => {
    render(<Input placeholder="Email" />);
    const input = screen.getByRole('textbox');
    expect(input).toHaveAttribute('placeholder', 'Email');
  });

  test('should forward the type prop input', () => {
    render(<Input type="text" />);
    const input = screen.getByRole('textbox');
    expect(input).toHaveAttribute('type', 'text');
  });

  test('should render custom className', () => {
    render(<Input className="custom-class" />);
    const input = screen.getByRole('textbox');
    expect(input).toHaveClass('custom-class');
  });

  test('should have default class', () => {
    render(<Input />);
    const input = screen.getByRole('textbox');
    expect(input).toHaveClass('peer input');
  });

  test('should have default class if type file', () => {
    render(<Input type="file" />);
    const input = screen.getByLabelText('Input');
    expect(input).toHaveClass('input__file');
  });

  test.each(['xs', 'sm', 'md', 'lg'] satisfies TallSizes[])(
    'should have size class %s',
    size => {
      render(<Input size={size} />);
      const input = screen.getByRole('textbox');
      expect(input).toHaveClass(`input__${size}`);
    },
  );

  test.each([
    'primary',
    'secondary',
    'success',
    'error',
    'warning',
    'info',
    'light',
    'dark',
  ] satisfies TallDefaultVariants[])(
    'should have variant class %s',
    variant => {
      render(<Input variant={variant} />);
      const input = screen.getByRole('textbox');
      expect(input).toHaveClass(`input__${variant}`);
    },
  );
});
