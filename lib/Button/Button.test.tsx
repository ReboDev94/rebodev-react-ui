import { render, screen, fireEvent } from '@testing-library/react';
import { TallSizes, TallVariants } from '../types';
import Button from '.';

describe('Button', () => {
  test('should render button', () => {
    render(<Button>Button</Button>);
    expect(screen.getByRole('button')).toBeTruthy();
  });

  test('should show children', () => {
    render(<Button>Test</Button>);
    expect(screen.getByText(/Test/i)).toBeDefined();
  });

  test('should renders default class', () => {
    render(<Button>Test</Button>);
    const content = screen.queryByRole('button');
    expect(content).toHaveClass('button');
  });

  test.each([
    'error',
    'primary',
    'secondary',
    'success',
    'warning',
    'info',
    'light',
    'dark',
    'outline-primary',
    'outline-secondary',
    'outline-success',
    'outline-error',
    'outline-warning',
    'outline-info',
    'outline-light',
    'outline-dark',
  ] satisfies TallVariants[])('should render variant %s', variant => {
    render(<Button variant={variant}>Button</Button>);
    const content = screen.queryByRole('button');
    expect(content).toHaveClass(`button__${variant}`);
  });

  test.each(['xs', 'sm', 'md', 'lg'] satisfies TallSizes[])(
    'should render size %s',
    size => {
      render(<Button size={size}>Button</Button>);
      const content = screen.queryByRole('button');
      expect(content).toHaveClass(`button__${size}`);
    },
  );

  test('should renders block size', () => {
    render(<Button block>Button</Button>);
    const content = screen.queryByRole('button');
    expect(content).toHaveClass('button__block');
  });

  test('should be disabled', () => {
    render(<Button disabled>Button</Button>);
    const content = screen.getByRole('button');
    expect(content).toBeDisabled();
  });

  test('should allow click', async () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Button</Button>);
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
