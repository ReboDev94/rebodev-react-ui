import { cleanup, render, screen } from '@testing-library/react';
import Card from '.';

describe('Card', () => {
  afterEach(cleanup);

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

  test('should renders variant', () => {
    render(<Card variant="secondary" />);
    expect(screen.getByLabelText('Card')).toHaveClass('card__secondary');
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
