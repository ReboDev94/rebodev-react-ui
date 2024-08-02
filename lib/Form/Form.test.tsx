import { render, screen } from '@testing-library/react';
import { createRef } from 'react';
import Form from '.';

describe('Form', () => {
  test('should render', () => {
    render(<Form />);
    const form = screen.getByRole('form');
    expect(form).toBeInTheDocument();
  });

  test('should forward ref to the form element', () => {
    const ref = createRef<HTMLFormElement>();
    render(<Form ref={ref} />);
    expect(ref.current).toBeInTheDocument();
  });

  test('should render children', () => {
    const { container } = render(
      <Form>
        <div>element</div>
      </Form>,
    );
    expect(container.firstChild).toHaveTextContent('element');
  });
});
