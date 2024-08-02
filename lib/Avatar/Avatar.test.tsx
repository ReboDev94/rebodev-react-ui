import { fireEvent, render, screen } from '@testing-library/react';
import { TallDefaultVariants, TallShapes, TallSizes } from '../types';
import Avatar from '.';

describe('Avatar', () => {
  test('should render avatar', () => {
    render(<Avatar />);
    expect(screen.getByLabelText('avatar')).toBeInTheDocument();
  });

  test('should hidden img', () => {
    render(<Avatar />);
    expect(screen.getByRole('img')).toHaveClass('hidden');
  });

  test('should a default class', () => {
    render(<Avatar />);
    expect(screen.getByLabelText('avatar')).toHaveClass('avatar');
  });

  test('should show children', () => {
    render(<Avatar>Y</Avatar>);
    expect(screen.getByText(/Y/i)).toBeDefined();
  });

  test('should show title', () => {
    render(<Avatar title="R" />);
    const labelTitle = screen.queryByLabelText('title');
    expect(labelTitle).toBeTruthy();
    expect(labelTitle?.textContent).toBe('R');
  });

  test('should show img', () => {
    const img_src = 'https://placehold.co/400';
    render(<Avatar src={img_src} />);
    const imgElement = screen.getByRole('img');
    fireEvent.load(imgElement);
    expect(imgElement).not.toHaveClass('hidden');
  });

  test('should render border', () => {
    render(<Avatar border />);
    const content = screen.queryByLabelText('avatar');
    expect(content).toHaveClass('avatar__bordered');
  });

  test.each(['xs', 'sm', 'md', 'lg'] satisfies TallSizes[])(
    'should render size %s',
    size => {
      render(<Avatar size={size} />);
      const content = screen.queryByLabelText('avatar');
      const img = screen.queryByRole('img');
      expect(content).toHaveClass(`avatar__${size}`);
      expect(img).toHaveClass(`avatar__${size}`);
    },
  );

  test.each(['circle', 'squared'] satisfies TallShapes[])(
    'should render shape %s',
    shape => {
      render(<Avatar shape={shape} />);
      const content = screen.queryByLabelText('avatar');
      expect(content).toHaveClass(`avatar__${shape}`);
    },
  );

  test.each([
    'error',
    'primary',
    'secondary',
    'success',
    'warning',
    'info',
    'light',
    'dark',
  ] satisfies TallDefaultVariants[])('should render variant %s', variant => {
    render(<Avatar variant={variant} />);
    const content = screen.queryByLabelText('avatar');
    expect(content).toHaveClass(`avatar__${variant}`);
  });
});
