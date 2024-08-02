import { render, screen } from '@testing-library/react';
import Divider from '.';
import { TallDefaultVariants, TallSizes } from '../types';

describe('Divider', () => {
  test('should render', () => {
    render(<Divider />);
    expect(screen.getByLabelText('Divider')).toBeInTheDocument();
  });

  test('should default class', () => {
    render(<Divider />);
    expect(screen.getByLabelText('Divider')).toHaveClass('divider');
  });

  test.each([
    'primary',
    'secondary',
    'success',
    'error',
    'warning',
    'info',
    'dark',
  ] satisfies TallDefaultVariants[])('should render variant %s', variant => {
    render(<Divider variant={variant} />);
    expect(screen.getByLabelText('Divider')).toHaveClass(`divider__${variant}`);
  });

  test.each(['xs', 'sm', 'md', 'lg'] satisfies TallSizes[])(
    'should render size %s and positions vertical',
    size => {
      render(<Divider size={size} position="vertical" />);
      expect(screen.getByLabelText('Divider')).toHaveClass(
        `divider__vertical__${size}`,
      );
    },
  );

  test.each(['xs', 'sm', 'md', 'lg'] satisfies TallSizes[])(
    'should render size %s and positions horizontal',
    size => {
      render(<Divider size={size} position="horizontal" />);
      expect(screen.getByLabelText('Divider')).toHaveClass(
        `divider__horizontal__${size}`,
      );
    },
  );
});
