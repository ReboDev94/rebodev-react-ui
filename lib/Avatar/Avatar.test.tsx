import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import Avatar from './Avatar';

describe('Avatar', () => {
  afterEach(cleanup);

  test('render  a default', () => {
    render(<Avatar />);
    expect(screen.getByLabelText('avatar')).toBeTruthy();
    expect(screen.getByRole('img').classList).toContain('hidden');
  });

  test('should show childre', () => {
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
    expect(imgElement.classList).not.toContain('hidden');
  });

  test('should a default class', () => {
    render(<Avatar />);
    const content = screen.queryByLabelText('avatar');
    expect(content?.classList).toContain('avatar');
  });

  test('renders a size', () => {
    render(<Avatar size="xs" />);
    const content = screen.queryByLabelText('avatar');
    const img = screen.queryByRole('img');
    expect(content?.classList).toContain('avatar__xs');
    expect(img?.classList).toContain('avatar__xs');
  });

  test('renders a shape', () => {
    render(<Avatar shape="squared" />);
    const content = screen.queryByLabelText('avatar');
    expect(content?.classList).toContain('avatar__squared');
  });

  test('renders a variant', () => {
    render(<Avatar variant="secondary" />);
    const content = screen.queryByLabelText('avatar');
    expect(content?.classList).toContain('avatar__secondary');
  });

  test('renders a border', () => {
    render(<Avatar border />);
    const content = screen.queryByLabelText('avatar');
    expect(content?.classList).toContain('avatar__bordered');
  });
});
