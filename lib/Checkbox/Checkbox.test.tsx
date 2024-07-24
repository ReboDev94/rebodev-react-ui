import { fireEvent, render, screen } from '@testing-library/react';
import { TallDefaultVariants, TallSizes } from '../types';
import { createRef } from 'react';
import Checkbox from '.';

describe('Checkbox', () => {
  test('should render checkbox-label', () => {
    render(<Checkbox id="check" />);
    expect(screen.getByLabelText('Checkbox-Label')).toBeInTheDocument();
  });

  test('should render checkbox', () => {
    render(<Checkbox id="check" />);
    expect(screen.getByLabelText('Checkbox')).toBeInTheDocument();
  });

  test('should render checkbox-icon', () => {
    render(<Checkbox id="check" />);
    const icon = screen.getByLabelText('Checkbox-Icon');
    const svg = icon.querySelector('svg');
    expect(svg).toBeInTheDocument();
  });

  test('should have the type checkbox', () => {
    render(<Checkbox id="check" />);
    expect(screen.getByLabelText('Checkbox')).toHaveAttribute(
      'type',
      'checkbox',
    );
  });

  test('should forward the ref to the input element', () => {
    const ref = createRef<HTMLInputElement>();
    render(<Checkbox id="check" ref={ref} />);
    expect(ref.current).toBeInTheDocument();
  });

  test('should get check on click', () => {
    render(<Checkbox id="check" />);
    const checkbox = screen.getByLabelText('Checkbox');
    fireEvent.click(checkbox);
    expect(checkbox).toBeChecked();
  });

  test('should be disabled', () => {
    render(<Checkbox id="check" disabled />);
    const checkbox = screen.getByLabelText('Checkbox');
    expect(checkbox).toHaveAttribute('disabled');
  });

  test('should render checkbox-label default class', () => {
    render(<Checkbox id="check" />);
    expect(screen.getByLabelText('Checkbox-Label')).toHaveClass(
      'checkbox__label',
    );
  });

  test('should render checkbox default class', () => {
    render(<Checkbox id="check" />);
    expect(screen.getByLabelText('Checkbox')).toHaveClass('peer checkbox');
  });

  test('should render checkbox-icon default class', () => {
    render(<Checkbox id="check" />);
    expect(screen.getByLabelText('Checkbox-Icon')).toHaveClass(
      'checkbox__wrapper__icon',
    );
  });

  test('should be have for checkbox-label', () => {
    render(<Checkbox id="check" />);
    expect(screen.getByLabelText('Checkbox-Label')).toHaveAttribute(
      'for',
      'check',
    );
  });

  test('should be have id checkbox', () => {
    render(<Checkbox id="check" />);
    expect(screen.getByLabelText('Checkbox')).toHaveAttribute('id', 'check');
  });

  test.each(['xs', 'sm', 'md', 'lg'] satisfies TallSizes[])(
    'should render variant %s',
    size => {
      render(<Checkbox id="check" size={size} />);
      expect(screen.getByLabelText('Checkbox-Label')).toHaveClass(
        `checkbox__${size}`,
      );
      expect(screen.getByLabelText('Checkbox')).toHaveClass(
        `checkbox__${size}`,
      );
      expect(screen.getByLabelText('Checkbox-Icon')).toHaveClass(
        `checkbox__${size}`,
      );
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
  ] satisfies TallDefaultVariants[])('should render variant %s', variant => {
    render(<Checkbox id="check" variant={variant} />);
    expect(screen.getByLabelText('Checkbox')).toHaveClass(
      `checkbox__${variant}`,
    );
  });
});
