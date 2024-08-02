import { fireEvent, render, screen, within } from '@testing-library/react';
import Sidebar from '.';

describe('BackDrop', () => {
  test('should render', () => {
    render(<Sidebar.BackDrop />);
    const backdrop = screen.getByLabelText('BackDrop');
    expect(backdrop).toBeInTheDocument();
  });

  test('should have default class', () => {
    render(<Sidebar.BackDrop className="custom-class" />);
    const backdrop = screen.getByLabelText('BackDrop');
    expect(backdrop).toHaveClass('sidebar__backdrop custom-class');
  });

  test('should allow click', () => {
    const click = vi.fn();
    render(<Sidebar.BackDrop onClick={click} />);
    const backdrop = screen.getByLabelText('BackDrop');
    fireEvent.click(backdrop);
    expect(click).toHaveBeenCalled();
  });
});

describe('Category', () => {
  test('should render', () => {
    render(<Sidebar.Category title="User" />);
    const category = screen.getByRole('heading');
    expect(category).toBeInTheDocument();
  });

  test('should show title', () => {
    render(<Sidebar.Category title="User" />);
    const category = screen.getByRole('heading');
    expect(category).toHaveTextContent('User');
  });

  test('should have default class', () => {
    render(<Sidebar.Category title="User" className="custom-class" />);
    const category = screen.getByRole('heading');
    expect(category).toHaveClass('sidebar__category custom-class');
  });

  test('should change type tag', () => {
    render(<Sidebar.Category title="User" tag="p" />);
    const category = screen.getByRole('paragraph');
    expect(category).toBeInTheDocument();
  });
});

describe('Content', () => {
  test('should render', () => {
    render(
      <Sidebar.Content>
        <div>element</div>
      </Sidebar.Content>,
    );
    const content = screen.getByLabelText('Content');
    expect(content).toBeInTheDocument();
  });

  test('should render children', () => {
    const { container } = render(
      <Sidebar.Content>
        <div>element</div>
      </Sidebar.Content>,
    );
    expect(container.firstChild).toHaveTextContent('element');
  });

  test('should have class', () => {
    render(
      <Sidebar.Content className="custom-class">
        <div>element</div>
      </Sidebar.Content>,
    );
    const content = screen.getByLabelText('Content');
    expect(content).toHaveClass('sidebar__content custom-class');
  });
});

describe('Header', () => {
  test('should render', () => {
    render(
      <Sidebar.Header>
        <div>element</div>
      </Sidebar.Header>,
    );
    const header = screen.getByLabelText('Header');
    expect(header).toBeInTheDocument();
  });

  test('should render children', () => {
    const { container } = render(
      <Sidebar.Header>
        <div>element</div>
      </Sidebar.Header>,
    );
    expect(container.firstChild).toHaveTextContent('element');
  });

  test('should have class', () => {
    render(
      <Sidebar.Header className="custom-class">
        <div>element</div>
      </Sidebar.Header>,
    );
    const header = screen.getByLabelText('Header');
    expect(header).toHaveClass('sidebar__header custom-class');
  });
});

describe('Sidebar', () => {
  test('should render', () => {
    render(<Sidebar open={false} />);
    const sidebar = screen.getByLabelText('Sidebar');
    expect(sidebar).toBeInTheDocument();
    expect(sidebar).toHaveStyle('width : 0');
  });

  test('should open', () => {
    render(<Sidebar open={true} width={400} />);
    const sidebar = screen.getByLabelText('Sidebar');
    const sidebarContainer =
      within(sidebar).getByLabelText('Sidebar-Container');
    expect(sidebar).toHaveStyle('width : 400px');
    expect(sidebarContainer).toHaveStyle('width : 400px');
  });

  test('should have default class', () => {
    render(<Sidebar open={true} className="custom-class" />);
    const sidebar = screen.getByLabelText('Sidebar');
    const sidebarContainer =
      within(sidebar).getByLabelText('Sidebar-Container');
    expect(sidebar).toHaveClass('sidebar custom-class');
    expect(sidebarContainer).toHaveClass('sidebar__container');
  });

  test('should have right class', () => {
    render(<Sidebar open={true} right />);
    const sidebar = screen.getByLabelText('Sidebar');
    expect(sidebar).toHaveClass('order-2 right-0');
  });

  test('Container should render children', () => {
    render(
      <Sidebar open={true} right>
        <div>element</div>
      </Sidebar>,
    );
    const sidebar = screen.getByLabelText('Sidebar');
    expect(sidebar).toHaveTextContent('element');
  });
});
