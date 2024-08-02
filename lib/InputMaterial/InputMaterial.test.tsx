import { render, screen } from '@testing-library/react';
import { TallDefaultVariants, TallSizes } from '../types';
import InputMaterial from '.';

describe('InputMaterial', () => {
  test('should render wrapper', () => {
    render(<InputMaterial title="Email" />);
    const input = screen.getByTestId('wrapper-input-material');
    expect(input).toBeInTheDocument();
  });

  test('should render first element is input', () => {
    render(<InputMaterial title="Email" />);
    const divElement = screen.getByTestId('wrapper-input-material');
    const firstChildElement = divElement?.firstElementChild;
    expect(firstChildElement?.tagName).toBe('INPUT');
  });

  test('should render first element is label', () => {
    render(<InputMaterial title="Email" />);
    const divElement = screen.getByTestId('wrapper-input-material');
    const firstChildElement = divElement?.firstElementChild?.nextElementSibling;
    expect(firstChildElement?.tagName).toBe('LABEL');
  });

  test('input should default props', () => {
    const { container } = render(<InputMaterial id="email" title="Email" />);
    const input = container.querySelector('input');
    expect(input).toHaveAttribute('type', 'text');
    expect(input).toHaveAttribute('placeholder', ' ');
    expect(input).toHaveAttribute('id', 'email');
  });

  test.each(['xs', 'sm', 'md', 'lg'] satisfies TallSizes[])(
    'input should have size class',
    size => {
      render(<InputMaterial id="email" title="Email" size={size} />);
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
    'input should have variant class',
    variant => {
      render(<InputMaterial id="email" title="Email" variant={variant} />);
      const input = screen.getByRole('textbox');
      expect(input).toHaveClass(`input__${variant}`);
    },
  );

  test('label should default class', () => {
    const { container } = render(<InputMaterial id="email" title="Email" />);
    const label = container.querySelector('label');
    expect(label).toHaveClass('input__material');
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
  ] satisfies TallDefaultVariants[])('label should variant class', variant => {
    const { container } = render(
      <InputMaterial id="email" title="Email" variant={variant} />,
    );
    const label = container.querySelector('label');
    expect(label).toHaveClass(`input__material__${variant}`);
  });
});
