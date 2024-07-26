import { render, screen } from '@testing-library/react';
import Card from '.';
import { TallDefaultVariants } from '../types';

describe('Card', () => {
  test('should render card', () => {
    render(<Card />);
    expect(screen.getByLabelText('Card')).toBeInTheDocument();
  });

  test('should render children', () => {
    const { container } = render(
      <Card>
        <div>element</div>
      </Card>,
    );
    expect(container.firstChild).toHaveTextContent('element');
  });

  test('should renders default class', () => {
    render(<Card />);
    expect(screen.getByLabelText('Card')).toHaveClass('card');
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
  ] satisfies TallDefaultVariants[])('should render variant %s', variant => {
    render(<Card variant={variant} />);
    expect(screen.getByLabelText('Card')).toHaveClass(`card__${variant}`);
  });

  test('should render cardBody', () => {
    render(<Card.Body>cardBody</Card.Body>);
    expect(screen.getByLabelText('CardBody')).toBeInTheDocument();
  });

  test('should render cardBody children', () => {
    const { container } = render(
      <Card.Body>
        <div>card-body-children</div>
      </Card.Body>,
    );
    expect(container.firstChild).toHaveTextContent('card-body-children');
  });

  test('should render cardBody default class', () => {
    render(<Card.Body>cardBody</Card.Body>);
    expect(screen.getByLabelText('CardBody')).toHaveClass('card__body');
  });
});
