import { render, screen, within } from '@testing-library/react';
import { TallPositionLabel } from '../types';
import FormLabel from '.';

describe('FormLabel', () => {
  test('should render wrapper label', () => {
    render(<FormLabel title="Email" />);
    const wrapper = screen.getByLabelText('FormLabel');
    expect(wrapper).toBeInTheDocument();
  });

  test('should render label into wrapper', () => {
    const { container } = render(<FormLabel title="Email" />);
    expect(container.querySelector('label')).toBeInTheDocument();
  });

  test('should render children', () => {
    const { container } = render(
      <FormLabel title="Email">
        <div data-testid="element-children">element</div>
      </FormLabel>,
    );
    const children = within(container).getByTestId('element-children');
    expect(children).toBeInTheDocument();
  });

  test('wrapper should have default class', () => {
    render(<FormLabel title="Email" />);
    const wrapper = screen.getByLabelText('FormLabel');
    expect(wrapper).toHaveClass('form__label__wrapper');
  });

  test.each(['LB', 'LT', 'RB', 'RT'] satisfies TallPositionLabel[])(
    'should show title with position %s',
    position => {
      render(<FormLabel title="Email" position={position} />);
      const label = screen.getByLabelText('Title');
      expect(label).toHaveTextContent('Email');
    },
  );

  test.each(['LB', 'LT', 'RB', 'RT'] satisfies TallPositionLabel[])(
    'should have default class with position %s',
    position => {
      render(<FormLabel title="Email" position={position} />);
      const label = screen.getByLabelText('Title');
      expect(label).toHaveClass('form__label');
    },
  );

  test.each(['LT', 'RT'] satisfies TallPositionLabel[])(
    'should have padding bottom class with position %s',
    position => {
      render(<FormLabel title="Email" position={position} />);
      const label = screen.getByLabelText('Title');
      expect(label).toHaveClass('pb-1');
    },
  );

  test.each(['RB', 'LB'] satisfies TallPositionLabel[])(
    'should have padding top class with position %s',
    position => {
      render(<FormLabel title="Email" position={position} />);
      const label = screen.getByLabelText('Title');
      expect(label).toHaveClass('pt-1');
    },
  );

  test.each(['RB', 'RT'] satisfies TallPositionLabel[])(
    'should have default class when position %s',
    position => {
      render(<FormLabel title="Email" position={position} />);
      const label = screen.getByLabelText('Title');
      expect(label).toHaveClass('form__label__right');
    },
  );
});
