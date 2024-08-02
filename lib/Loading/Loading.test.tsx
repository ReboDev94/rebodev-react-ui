import { render } from '@testing-library/react';
import Loading from '.';
import { TallDefaultVariants, TallSizes } from '../types';

describe('Loading', () => {
  test('should render', () => {
    const { container } = render(<Loading />);
    expect(container.querySelector('.loading')).toBeInTheDocument();
  });

  test('should have custom class', () => {
    const { container } = render(<Loading className="custom-class" />);
    expect(container.querySelector('.loading')).toHaveClass('custom-class');
  });

  test.each(['xs', 'sm', 'md', 'lg'] satisfies TallSizes[])(
    'should have size class %s',
    size => {
      const { container } = render(<Loading size={size} />);
      expect(container.querySelector('.loading')).toHaveClass(
        `loading__${size}`,
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
  ] satisfies TallDefaultVariants[])(
    'should have variant class %s',
    variant => {
      const { container } = render(<Loading variant={variant} />);
      expect(container.querySelector('.loading')).toHaveClass(
        `loading__${variant}`,
      );
    },
  );
});
