import { render, screen, within } from '@testing-library/react';
import { TallDefaultVariants } from '../types';
import { ArrowDownIcon } from '../assets/svg';
import ListGroup from '.';

describe('ListGroup', () => {
  test('should render', () => {
    render(<ListGroup />);
    const listGroup = screen.getByRole('list');
    expect(listGroup).toBeInTheDocument();
  });

  test('should have default class', () => {
    render(<ListGroup />);
    const listGroup = screen.getByRole('list');
    expect(listGroup).toHaveClass('list__group');
  });

  test('should have custom class', () => {
    render(<ListGroup className="custom-class" />);
    const listGroup = screen.getByRole('list');
    expect(listGroup).toHaveClass('custom-class');
  });

  test('should render children', () => {
    const { container } = render(
      <ListGroup>
        <div>element</div>
      </ListGroup>,
    );
    expect(container.firstChild).toHaveTextContent('element');
  });
});

describe('Item', () => {
  test('Item should render', () => {
    render(<ListGroup.Item>Element</ListGroup.Item>);
    const listGroup = screen.getByLabelText('listitem');
    expect(listGroup).toBeInTheDocument();
  });

  test('Item should render children', () => {
    render(<ListGroup.Item>Element</ListGroup.Item>);
    const listGroup = screen.getByLabelText('listitem');
    expect(listGroup).toHaveTextContent('Element');
  });

  test('Item should have default class', () => {
    render(<ListGroup.Item>Element</ListGroup.Item>);
    const listGroup = screen.getByLabelText('listitem');
    expect(listGroup).toHaveClass('group list__group__item');
  });

  test('Item should have custom class', () => {
    render(<ListGroup.Item className="custom-class">Element</ListGroup.Item>);
    const listGroup = screen.getByLabelText('listitem');
    expect(listGroup).toHaveClass('custom-class');
  });

  test('Item should render wrapper icon', () => {
    const { container } = render(<ListGroup.Item>Element</ListGroup.Item>);
    const wrapper = within(container).getByLabelText('Wrapper-Icon');
    expect(wrapper).toBeInTheDocument();
  });

  test('Item should render  icon', () => {
    const { container } = render(
      <ListGroup.Item icon={ArrowDownIcon}>Element</ListGroup.Item>,
    );
    const wrapper = within(container).getByLabelText('Wrapper-Icon');
    const icon = wrapper.querySelector('svg');
    expect(icon).toBeInTheDocument();
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
  ] satisfies TallDefaultVariants[])(
    'Item should have varian class %s',
    variant => {
      render(<ListGroup.Item variant={variant}>Element</ListGroup.Item>);
      const listGroup = screen.getByLabelText('listitem');
      expect(listGroup).toHaveClass(`group list__group__item__${variant}`);
    },
  );
});
