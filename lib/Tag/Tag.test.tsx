import { fireEvent, render, within } from '@testing-library/react';
import Tag from './Tag';
import { ITag } from './interfaces';

const val: string[] = ['Yare', 'Rafa'];
const change = vi.fn();
const removed = vi.fn();

const DEFAULT_PROPS: ITag = {
  value: val,
  onChange: change,
  onRemoved: removed,
};

function RenderTag(props: ITag) {
  return <Tag {...props} />;
}

const setup = (props: ITag = { ...DEFAULT_PROPS }) => {
  const utils = render(<RenderTag {...props} />);
  return { ...utils };
};

describe('Tag', () => {
  test('should render', () => {
    const { getByLabelText } = setup();
    const tag = getByLabelText('Tag');
    expect(tag).toBeInTheDocument();
  });

  test('should be disabled', () => {
    const { getByLabelText, queryAllByLabelText } = setup({
      disabled: true,
      ...DEFAULT_PROPS,
    });
    const tag = getByLabelText('Tag');
    const btnsClean = queryAllByLabelText('Button-Clean');
    expect(tag).toHaveClass('opacity-50');
    expect(btnsClean.length).toBe(0);
  });

  test('should add on enter input', () => {
    const { getByLabelText } = setup();
    const tag = getByLabelText('Tag');
    const input = within(tag).getByRole('textbox');
    fireEvent.change(input, { target: { value: 'Hola mundo' } });
    fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });
    expect(change).toHaveBeenCalledTimes(1);
  });

  test('should event focus', () => {
    const { getByLabelText } = setup();
    const tag = getByLabelText('Tag');
    const input = within(tag).getByRole('textbox');
    fireEvent.focus(tag);
    expect(input).toHaveFocus();
  });

  test('should event blur', () => {
    const { getByLabelText } = setup();
    const tag = getByLabelText('Tag');
    const input = within(tag).getByRole('textbox');
    fireEvent.blur(tag);
    expect(input).not.toHaveFocus();
  });

  test('should render tags', () => {
    const { getAllByLabelText } = setup();
    const items = getAllByLabelText('Item');
    expect(items.length).toBe(2);
  });

  test('should event onRemoved', () => {
    const { getAllByLabelText } = setup();
    const items = getAllByLabelText('Item');
    const buttonRemove = within(items[0]).getByRole(
      'button',
    ) as HTMLButtonElement;
    fireEvent.click(buttonRemove);
    expect(removed).toHaveBeenCalled();
  });
});
