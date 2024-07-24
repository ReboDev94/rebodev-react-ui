import { cleanup, render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';

describe('Button', () => {
  afterEach(cleanup);

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

  test('should renders variant', () => {
    render(<Button variant="outline-secondary">Button</Button>);
    const content = screen.queryByRole('button');
    expect(content).toHaveClass('button__outline-secondary');
  });

  test('should renders size', () => {
    render(<Button size="lg">Button</Button>);
    const content = screen.queryByRole('button');
    expect(content).toHaveClass('button__lg');
  });

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
