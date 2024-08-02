import { fireEvent, render, screen, within } from '@testing-library/react';
import { createRef, useEffect, useRef } from 'react';
import { TallAlings, TallPositions } from '../types';
import Avatar from '../Avatar';
import Dropdown from '.';

const DropdownToogleFocus = () => {
  const ref = useRef<HTMLLabelElement>(null);
  useEffect(() => {
    ref.current?.focus();
  });
  return <Dropdown.Toogle ref={ref}>Click</Dropdown.Toogle>;
};

describe('DropDown', () => {
  test('should render dropdown', () => {
    render(<Dropdown />);
    expect(screen.getByRole('listbox')).toBeInTheDocument();
  });

  test('should dropdown have default class', () => {
    render(<Dropdown />);
    expect(screen.getByRole('listbox')).toHaveClass('group dropdown');
  });

  test('should forward the ref to the dropdown element', () => {
    const ref = createRef<HTMLDivElement>();
    render(<Dropdown ref={ref} />);
    expect(ref.current).toBeInTheDocument();
  });

  test('dropdown should show children', () => {
    const { container } = render(
      <Dropdown>
        <div>element</div>
      </Dropdown>,
    );
    expect(container.firstChild).toHaveTextContent('element');
  });
});

describe('Toggle', () => {
  test('should render dropdown toggle', () => {
    render(<Dropdown.Toogle>Hola mundo</Dropdown.Toogle>);
    expect(screen.getByLabelText('DropDown-Toggle')).toBeInTheDocument();
  });

  test('should render default button into toggle', () => {
    const { container } = render(
      <Dropdown.Toogle button>Hola mundo</Dropdown.Toogle>,
    );
    const buttonElement = within(container).getByRole('button');
    expect(buttonElement).toBeInTheDocument();
  });

  test('should toggle focus', () => {
    render(<DropdownToogleFocus />);
    const toggle = screen.getByLabelText('DropDown-Toggle');
    expect(toggle).toHaveFocus();
  });

  test('should toggle disabled', () => {
    render(
      <Dropdown.Toogle button disabled>
        Hola mundo
      </Dropdown.Toogle>,
    );
    const toggle = screen.getByLabelText('DropDown-Toggle');
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(toggle).not.toHaveAttribute('tabIndex');
    expect(toggle).not.toHaveFocus();
    expect(button).toBeDisabled();
  });

  test('should have custom toggle', () => {
    render(
      <Dropdown.Toogle button={false}>
        <Avatar>R</Avatar>
      </Dropdown.Toogle>,
    );
    expect(screen.queryByRole('button')).not.toBeInTheDocument();
  });

  test('should have default toggle class', () => {
    render(<Dropdown.Toogle>Hola mundo</Dropdown.Toogle>);
    expect(screen.getByLabelText('DropDown-Toggle')).toHaveClass(
      'dropdown__toggle',
    );
  });
});

describe('Menu', () => {
  test('should render menu', () => {
    render(<Dropdown.Menu />);
    const menu = screen.queryByRole('list');
    expect(menu).toBeInTheDocument();
  });

  test('menu should show children', () => {
    const { container } = render(
      <Dropdown.Menu>
        <div>element</div>
      </Dropdown.Menu>,
    );
    expect(container.firstChild).toHaveTextContent('element');
  });

  test('menu should have attribute tabIndex', () => {
    render(<Dropdown.Menu />);
    const menu = screen.queryByRole('list');
    expect(menu).toHaveAttribute('tabIndex', '0');
  });

  test('menu should have default class', () => {
    render(<Dropdown.Menu />);
    const menu = screen.queryByRole('list');
    expect(menu).toHaveClass('dropdown__menu');
  });

  test.each(['top', 'bottom', 'left', 'right'] satisfies TallPositions[])(
    'menu should render position %s',
    position => {
      render(<Dropdown.Menu position={position} />);
      const menu = screen.queryByRole('list');
      expect(menu).toHaveClass(`dropdown__menu__${position}`);
    },
  );

  test.each([
    ['top', 'start'],
    ['top', 'end'],
    ['top', 'center'],
    ['bottom', 'start'],
    ['bottom', 'end'],
    ['bottom', 'center'],
  ] satisfies [TallPositions, TallAlings][])(
    'menu should render align vertical (%s + %s)',
    (position, align) => {
      render(<Dropdown.Menu position={position} align={align} />);
      const menu = screen.queryByRole('list');
      expect(menu).toHaveClass(`dropdown__menu__vertical__${align}`);
    },
  );

  test.each([
    ['left', 'start'],
    ['left', 'end'],
    ['left', 'center'],
    ['right', 'start'],
    ['right', 'end'],
    ['right', 'center'],
  ] satisfies [TallPositions, TallAlings][])(
    'menu should render align vertical (%s + %s)',
    (position, align) => {
      render(<Dropdown.Menu position={position} align={align} />);
      const menu = screen.queryByRole('list');
      expect(menu).toHaveClass(`dropdown__menu__lateral__${align}`);
    },
  );
});

describe('Item', () => {
  test('should render item', () => {
    render(<Dropdown.Item>element 1</Dropdown.Item>);
    const item = screen.getByRole('menuitem');
    expect(item).toBeInTheDocument();
  });

  test('item should have attribute tabIndex', () => {
    render(<Dropdown.Item>element 1</Dropdown.Item>);
    const item = screen.getByRole('menuitem');
    expect(item).toHaveAttribute('tabIndex', '0');
  });

  test('item should show children', () => {
    const { container } = render(
      <Dropdown.Item>
        <div>element</div>
      </Dropdown.Item>,
    );
    expect(container.firstChild).toHaveTextContent('element');
  });

  test('item should disabled', () => {
    const handleClick = vi.fn();
    render(
      <Dropdown.Item onClick={handleClick} disabled>
        element 1
      </Dropdown.Item>,
    );
    const item = screen.getByRole('menuitem');
    fireEvent.click(item);
    expect(handleClick).not.toHaveBeenCalledOnce();
  });

  test('should allow click', () => {
    const handleClick = vi.fn();
    render(<Dropdown.Item onClick={handleClick}>element 1</Dropdown.Item>);
    const item = screen.getByRole('menuitem');
    fireEvent.click(item);
    expect(handleClick).toHaveBeenCalledOnce();
  });
});
