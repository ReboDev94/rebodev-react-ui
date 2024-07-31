import { fireEvent, render, screen } from '@testing-library/react';
import { ArrowDownIcon } from '../assets/svg';
import Menu from '.';
import { TallDefaultVariants } from '../types';

describe('Menu', () => {
  test('should render', () => {
    render(<Menu />);
    expect(screen.getByRole('list')).toBeInTheDocument();
  });

  test('should have default class', () => {
    render(<Menu />);
    expect(screen.getByRole('list')).toHaveClass('menu');
  });

  test('should have custom class', () => {
    render(<Menu className="cutom-class" />);
    expect(screen.getByRole('list')).toHaveClass('cutom-class');
  });

  test('should render children', () => {
    const { container } = render(
      <Menu>
        <div>element</div>
      </Menu>,
    );
    expect(container.firstChild).toHaveTextContent('element');
  });

  test('item should render', () => {
    render(<Menu.Item title="User" />);
    expect(screen.getByRole('listitem')).toBeInTheDocument();
  });

  test('should show title', () => {
    render(<Menu.Item title="User" />);
    const title = screen.getByLabelText('Title');
    expect(title).toHaveTextContent('User');
    expect(title).toHaveClass('menu__wrapper__title');
  });

  test('should show icon', () => {
    render(<Menu.Item title="User" icon={ArrowDownIcon} />);
    const wrapper = screen.getByLabelText('Icon');
    const svg = wrapper.querySelector('svg');
    expect(wrapper).toHaveClass('menu__wrapper');
    expect(svg).toHaveClass('menu__wrapper__icon');
    expect(svg).toBeInTheDocument();
  });

  test('Item should have attribute tabIndex', () => {
    render(<Menu.Item title="User" />);
    expect(screen.getByRole('listitem')).toHaveAttribute('tabIndex', '0');
  });

  test('Item should allow click', () => {
    const onClickItem = vi.fn();
    render(<Menu.Item title="User" onClick={onClickItem} />);
    const item = screen.getByRole('listitem');
    fireEvent.click(item);
    expect(onClickItem).toHaveBeenCalled();
  });

  test('Item should have default class', () => {
    render(<Menu.Item title="User" />);
    const item = screen.getByRole('listitem');
    expect(item).toHaveClass('group menu__item__sidebar');
  });

  test('Item should have custom class', () => {
    render(<Menu.Item title="User" className="custom-class" />);
    const item = screen.getByRole('listitem');
    expect(item).toHaveClass('custom-class');
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
  ] satisfies TallDefaultVariants[])(
    'Item should have variant class %s',
    variant => {
      render(<Menu.Item title="User" variant={variant} active />);
      const item = screen.getByRole('listitem');
      expect(item).toHaveClass(`menu__item__${variant}`);
      expect(item).toHaveClass(`font-semibold menu__item__active__${variant}`);
    },
  );

  test('Collapse should render', () => {
    render(
      <Menu.Collapse title="User">
        <div>element</div>
      </Menu.Collapse>,
    );
    const collapse = screen.getByLabelText('Collapse');
    expect(collapse).toBeInTheDocument();
  });

  test('Collapse should show children', () => {
    render(
      <Menu.Collapse title="User">
        <div>element</div>
      </Menu.Collapse>,
    );
    const items = screen.getByLabelText('Items');
    expect(items.firstChild).toHaveTextContent('element');
  });

  test('Collapse should show title', () => {
    render(
      <Menu.Collapse title="User">
        <div>element</div>
      </Menu.Collapse>,
    );
    const title = screen.getByLabelText('Title');
    expect(title).toHaveTextContent('User');
    expect(title).toHaveClass('menu__wrapper__title');
  });

  test('Collapse should show icon', () => {
    render(
      <Menu.Collapse title="User" icon={ArrowDownIcon}>
        <div>element</div>
      </Menu.Collapse>,
    );
    const wrapper = screen.getByLabelText('Icon');
    const svg = wrapper.querySelector('svg');
    expect(wrapper).toHaveClass('menu__wrapper');
    expect(svg).toHaveClass('menu__wrapper__icon');
    expect(svg).toBeInTheDocument();
  });

  test('Collapse should show icon arrow', () => {
    render(
      <Menu.Collapse title="User" icon={ArrowDownIcon}>
        <div>element</div>
      </Menu.Collapse>,
    );
    const arrowIcon = screen.getByTestId('IconArrow');
    expect(arrowIcon).toBeInTheDocument();
    expect(arrowIcon).toHaveClass('menu__wrapper__icon');
  });

  test('Collapse should have default class', () => {
    render(
      <Menu.Collapse title="User">
        <div>element</div>
      </Menu.Collapse>,
    );
    const collapse = screen.getByLabelText('Collapse');
    expect(collapse).toHaveClass('group menu__item__sidebar');
  });

  test('Collapse should have custom class', () => {
    render(
      <Menu.Collapse title="User" className="custom-class">
        <div>element</div>
      </Menu.Collapse>,
    );
    const collapse = screen.getByLabelText('Collapse');
    expect(collapse).toHaveClass('custom-class');
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
  ] satisfies TallDefaultVariants[])(
    'Collapse should have variant class %s',
    variant => {
      render(
        <Menu.Collapse title="User" variant={variant}>
          <div>element</div>
        </Menu.Collapse>,
      );
      const collapse = screen.getByLabelText('Collapse');
      expect(collapse).toHaveClass(`menu__item__${variant}`);
    },
  );

  test('Collapse should show items', () => {
    render(
      <Menu.Collapse title="User">
        <div>element</div>
      </Menu.Collapse>,
    );
    const collapse = screen.getByLabelText('Collapse');
    const items = screen.getByLabelText('Items');
    expect(items).toHaveClass('hidden');
    fireEvent.click(collapse);
    expect(items).not.toHaveClass('hidden');
  });
});
