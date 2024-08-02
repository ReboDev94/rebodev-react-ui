import { render, screen } from '@testing-library/react';
import { createRef } from 'react';
import Table from '.';

describe('Row', () => {
  test('should render', () => {
    render(
      <Table>
        <Table.Body>
          <Table.Row />
        </Table.Body>
      </Table>,
    );
    const row = screen.getByRole('row');
    expect(row).toBeInTheDocument();
  });

  test('should forward to the row element', () => {
    const ref = createRef<HTMLTableRowElement>();
    render(
      <Table>
        <Table.Body>
          <Table.Row ref={ref} />
        </Table.Body>
      </Table>,
    );
    expect(ref.current).toBeInTheDocument();
  });

  test('should render children', () => {
    const { container } = render(
      <Table>
        <Table.Body>
          <Table.Row>
            <Table.Col>element</Table.Col>
          </Table.Row>
        </Table.Body>
      </Table>,
    );
    expect(container.firstChild).toHaveTextContent('element');
  });

  test('should have default class', () => {
    render(
      <Table>
        <Table.Body>
          <Table.Row hover className="custom-class" />
        </Table.Body>
      </Table>,
    );
    const row = screen.getByRole('row');
    expect(row).toHaveClass('table__hover custom-class');
  });
});

describe('Col', () => {
  test('should render', () => {
    render(
      <Table>
        <Table.Body>
          <Table.Row>
            <Table.Col />
          </Table.Row>
        </Table.Body>
      </Table>,
    );
    const col = screen.getByRole('cell');
    expect(col).toBeInTheDocument();
  });

  test('should forward to the col element', () => {
    const ref = createRef<HTMLTableCellElement>();
    render(
      <Table>
        <Table.Body>
          <Table.Row>
            <Table.Col ref={ref} />
          </Table.Row>
        </Table.Body>
      </Table>,
    );
    expect(ref.current).toBeInTheDocument();
  });

  test('should render children', () => {
    const { container } = render(
      <Table>
        <Table.Body>
          <Table.Row>
            <Table.Col>element</Table.Col>
          </Table.Row>
        </Table.Body>
      </Table>,
    );
    expect(container.firstChild).toHaveTextContent('element');
  });

  test('should have default class', () => {
    render(
      <Table>
        <Table.Body>
          <Table.Row>
            <Table.Col className="custom-class" />
          </Table.Row>
        </Table.Body>
      </Table>,
    );
    const col = screen.getByRole('cell');
    expect(col).toHaveClass('table__col custom-class');
  });
});

describe('Head', () => {
  test('should render', () => {
    render(
      <Table>
        <Table.Head />
      </Table>,
    );
    const head = screen.getByRole('rowgroup');
    expect(head).toBeInTheDocument();
  });

  test('should render array children', () => {
    render(
      <Table>
        <Table.Head>
          <>Name</>
          <>LastName</>
          <>Phone</>
        </Table.Head>
      </Table>,
    );
    const head = screen.getAllByRole('columnheader');
    expect(head.length).toBe(3);
  });

  test('should render only children', () => {
    render(
      <Table>
        <Table.Head>Name</Table.Head>
      </Table>,
    );
    const head = screen.getAllByRole('columnheader');
    expect(head.length).toBe(1);
  });

  test('should forward to the head element', () => {
    const ref = createRef<HTMLTableSectionElement>();
    render(
      <Table>
        <Table.Head ref={ref} />
      </Table>,
    );
    expect(ref.current).toBeInTheDocument();
  });

  test('should have default class', () => {
    render(
      <Table>
        <Table.Head className="custom-class" />
      </Table>,
    );
    const head = screen.getByRole('rowgroup');
    expect(head).toHaveClass('table__head custom-class');
  });

  test('children should have default class and scope rol', () => {
    render(
      <Table>
        <Table.Head>
          <>Name</>
          <>LastName</>
          <>Phone</>
        </Table.Head>
      </Table>,
    );
    const head = screen.getAllByLabelText('Head-Item');
    head.forEach(item => {
      expect(item).toHaveClass('table__th');
      expect(item).toHaveAttribute('scope', 'rol');
    });
  });
});

describe('Footer', () => {
  test('should render', () => {
    render(
      <Table>
        <Table.Footer />
      </Table>,
    );
    const footer = screen.getByLabelText('Footer');
    expect(footer).toBeInTheDocument();
  });

  test('should children', () => {
    render(
      <Table>
        <Table.Footer>
          <Table.Row>
            <Table.Col>element</Table.Col>
          </Table.Row>
        </Table.Footer>
      </Table>,
    );
    const footer = screen.getByLabelText('Footer');
    expect(footer).toHaveTextContent('element');
  });

  test('should have class line divide', () => {
    render(
      <Table>
        <Table.Footer divide className="custom-class">
          <Table.Row>
            <Table.Col>element</Table.Col>
          </Table.Row>
        </Table.Footer>
      </Table>,
    );
    const footer = screen.getByLabelText('Footer');
    expect(footer).toHaveClass('table__divider custom-class');
  });

  test('should forward to the Footer element', () => {
    const ref = createRef<HTMLTableSectionElement>();
    render(
      <Table>
        <Table.Footer ref={ref} />
      </Table>,
    );
    expect(ref.current).toBeInTheDocument();
  });
});

describe('Body', () => {
  test('should render', () => {
    render(
      <Table>
        <Table.Body />
      </Table>,
    );
    const body = screen.getByRole('rowgroup');
    expect(body).toBeInTheDocument();
  });

  test('should render children', () => {
    render(
      <Table>
        <Table.Body>
          <Table.Row>
            <Table.Col>element</Table.Col>
          </Table.Row>
        </Table.Body>
      </Table>,
    );
    const body = screen.getByRole('rowgroup');
    expect(body.firstChild).toHaveTextContent('element');
  });

  test('should render default children', () => {
    render(
      <Table>
        <Table.Body labelNoInformation="sin informacion" />
      </Table>,
    );
    const body = screen.getByRole('rowgroup');
    expect(body).toHaveTextContent('sin informacion');
  });

  test('should have default class', () => {
    render(
      <Table>
        <Table.Body divide className="custom-class" />
      </Table>,
    );
    const body = screen.getByRole('rowgroup');
    expect(body).toHaveClass('table__divider custom-class');
  });

  test('should forward to the table element', () => {
    const ref = createRef<HTMLTableSectionElement>();
    render(
      <Table>
        <Table.Body ref={ref} />
      </Table>,
    );
    expect(ref.current).toBeInTheDocument();
  });
});
