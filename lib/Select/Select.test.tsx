import { render, screen } from '@testing-library/react';
import Select from '.';
import { TallDefaultVariants, TallSizes } from '../types';
import { createRef } from 'react';

describe('Option', () => {
  test('should render', () => {
    render(<Select.Option />);
    const opt = screen.getByRole('option');
    expect(opt).toBeInTheDocument();
  });

  test('should render children', () => {
    const { container } = render(<Select.Option>element</Select.Option>);
    expect(container.firstChild).toHaveTextContent('element');
  });

  test('should attribute value', () => {
    render(<Select.Option value={'element'}>element</Select.Option>);
    const opt = screen.getByRole('option');
    expect(opt).toHaveAttribute('value', 'element');
  });
});

describe('Select', () => {
  test('should render', () => {
    render(<Select />);
    const select = screen.getByRole('combobox');
    expect(select).toBeInTheDocument();
  });

  test('should render children', () => {
    const { container } = render(
      <Select>
        <Select.Option value="hola">element</Select.Option>
      </Select>,
    );
    expect(container.firstChild).toHaveTextContent('element');
  });

  test('should have default class', () => {
    render(<Select className="custom-class" />);
    const select = screen.getByRole('combobox');
    expect(select).toHaveClass('input custom-class');
  });

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
      render(<Select variant={variant} />);
      const select = screen.getByRole('combobox');
      expect(select).toHaveClass(`input__${variant}`);
    },
  );

  test.each(['xs', 'sm', 'md', 'lg'] satisfies TallSizes[])(
    'should have size class %s',
    size => {
      render(<Select size={size} />);
      const select = screen.getByRole('combobox');
      expect(select).toHaveClass(`input__${size}`);
    },
  );

  test('should forward to the select element', () => {
    const ref = createRef<HTMLSelectElement>();
    render(<Select ref={ref} />);
    expect(ref.current).toBeInTheDocument();
  });
});
