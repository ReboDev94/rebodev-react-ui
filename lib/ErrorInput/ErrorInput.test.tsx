import { cleanup, render, screen } from '@testing-library/react';
import ErrorInput from './ErrorInput';

describe('ErrorInput', () => {
  afterEach(cleanup);

  test('should not render', () => {
    render(<ErrorInput />);
    expect(screen.queryByLabelText('ErrorInput')).toBeNull();
  });

  test('should render', () => {
    render(<ErrorInput message="EL email no es valido" />);
    expect(screen.getByLabelText('ErrorInput')).toBeInTheDocument();
  });

  test('should have default class', () => {
    render(<ErrorInput message="EL email no es valido" />);
    expect(screen.getByLabelText('ErrorInput')).toHaveClass('error__input');
  });

});
