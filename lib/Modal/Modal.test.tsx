import { fireEvent, render, screen, within } from '@testing-library/react';
import Modal from '.';
import { TallSizes } from '../types';

describe('Modal', () => {
  test('should render backdrop', () => {
    render(
      <Modal backdrop value={true}>
        <div>element</div>
      </Modal>,
    );
    const backDrop = screen.queryByLabelText('BackDrop');
    expect(backDrop).toBeInTheDocument();
  });

  test('should have backdrop default class', () => {
    render(
      <Modal backdrop value={true}>
        <div>element</div>
      </Modal>,
    );
    const backDrop = screen.queryByLabelText('BackDrop');
    expect(backDrop).toHaveClass('modal__backdrop');
  });

  test('should not render when value is false', () => {
    render(
      <Modal>
        <div>element</div>
      </Modal>,
    );
    const modal = screen.queryByLabelText('Modal');
    expect(modal).not.toBeInTheDocument();
  });

  test('should render', () => {
    render(
      <Modal value={true}>
        <div>element</div>
      </Modal>,
    );
    const modal = screen.getByLabelText('Modal');
    const wrapper = within(modal).getByLabelText('Modal-Wrapper');
    const container = within(wrapper).getByLabelText('Modal-Container');
    expect(modal).toBeInTheDocument();
    expect(wrapper).toBeInTheDocument();
    expect(container).toBeInTheDocument();
  });

  test('should render children into container', () => {
    render(
      <Modal value={true}>
        <div>element</div>
      </Modal>,
    );
    const container = screen.getByLabelText('Modal-Container');
    expect(container.firstChild).toHaveTextContent('element');
  });

  test('should have default class', () => {
    render(
      <Modal value={true}>
        <div>element</div>
      </Modal>,
    );
    const modal = screen.getByLabelText('Modal');
    const wrapper = within(modal).getByLabelText('Modal-Wrapper');
    const container = within(wrapper).getByLabelText('Modal-Container');
    expect(modal).toHaveClass('modal__container');
    expect(wrapper).toHaveClass('modal__wrapper');
    expect(container).toHaveClass('modal');
  });

  test('modal should have custom class', () => {
    render(
      <Modal value={true} className="custom-class">
        <div>element</div>
      </Modal>,
    );
    const modal = screen.getByLabelText('Modal');
    expect(modal).toHaveClass('custom-class');
  });

  test('modal should have center class', () => {
    render(
      <Modal value={true} center>
        <div>element</div>
      </Modal>,
    );
    const modal = screen.getByLabelText('Modal-Wrapper');
    expect(modal).toHaveClass('modal__wrapper__center');
  });

  test.each([
    ['xs', 'md:!w-2/6'],
    ['sm', 'md:!w-2/4'],
    ['md', 'md:!w-3/4'],
    ['lg', 'md:!w-full'],
  ] satisfies [TallSizes, string][])(
    'modal should have sizes %s class %s',
    (a, b) => {
      render(
        <Modal value={true} size={a}>
          <div>element</div>
        </Modal>,
      );
      const modal = screen.getByLabelText('Modal-Container');
      expect(modal).toHaveClass(b);
    },
  );
  // Modal Header

  test('Header should render', () => {
    render(<Modal.Header />);
    const header = screen.getByLabelText('Modal-Header');
    expect(header).toBeInTheDocument();
  });

  test('Header should render children', () => {
    const { container } = render(
      <Modal.Header>
        <div>element</div>
      </Modal.Header>,
    );
    expect(container.firstChild).toHaveTextContent('element');
  });

  test('Header should render hidden button', () => {
    const { container } = render(
      <Modal.Header>
        <div>element</div>
      </Modal.Header>,
    );
    const button = container.querySelector('button');
    expect(button).toBeInTheDocument();
  });

  test('Header should not render hidden button', () => {
    const { container } = render(
      <Modal.Header hiddenClose>
        <div>element</div>
      </Modal.Header>,
    );
    const button = container.querySelector('button');
    expect(button).not.toBeInTheDocument();
  });

  test('Header should allow click onclose', () => {
    const close = vi.fn();
    const { container } = render(
      <Modal.Header onClose={close}>
        <div>element</div>
      </Modal.Header>,
    );
    const button = container.querySelector('button') as HTMLButtonElement;
    fireEvent.click(button);
    expect(close).toHaveBeenCalled();
  });

  test('Header should have default class', () => {
    render(
      <Modal.Header className="custom-class">
        <div>element</div>
      </Modal.Header>,
    );
    const header = screen.getByLabelText('Modal-Header');
    expect(header).toHaveClass('modal__header custom-class');
  });

  test('Header should have default class when not exits children', () => {
    render(<Modal.Header />);
    const header = screen.getByLabelText('Modal-Header');
    expect(header).toHaveClass('modal__only__button');
  });

  test('Header should render button with icon', () => {
    render(
      <Modal.Header>
        <div>element</div>
      </Modal.Header>,
    );
    const button = screen.getByLabelText('Close');
    expect(button.querySelector('svg')).toBeInTheDocument();
  });
  // Body

  test('Body should render', () => {
    render(<Modal.Body />);
    const header = screen.getByLabelText('Modal-Body');
    expect(header).toBeInTheDocument();
  });

  test('Body should have default class', () => {
    render(<Modal.Body className="custom-class" />);
    const header = screen.getByLabelText('Modal-Body');
    expect(header).toHaveClass('p-4 custom-class');
  });

  test('Body should render children', () => {
    const { container } = render(
      <Modal.Body>
        <div>element</div>
      </Modal.Body>,
    );
    expect(container.firstChild).toHaveTextContent('element');
  });
  // Footer

  test('Footer should render', () => {
    render(<Modal.Footer />);
    const header = screen.getByLabelText('Modal-Footer');
    expect(header).toBeInTheDocument();
  });

  test('Footer should have default class', () => {
    render(<Modal.Footer className="custom-class" />);
    const header = screen.getByLabelText('Modal-Footer');
    expect(header).toHaveClass('modal__footer custom-class');
  });

  test('Footer should render children', () => {
    const { container } = render(
      <Modal.Footer>
        <div>element</div>
      </Modal.Footer>,
    );
    expect(container.firstChild).toHaveTextContent('element');
  });
});
