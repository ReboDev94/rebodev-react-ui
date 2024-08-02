import { fireEvent, render, within } from '@testing-library/react';
import InputSearch, { IInputSearch } from '.';
import { TallDefaultVariants, TallSizes } from '../types';

const mockSearchValue = vi.fn();
const changeData = vi.fn();

const options = [
  { label: 'Yare', value: 'yare' },
  { label: 'Rafa', value: 'rafael' },
];

const DEFAULT_PROPS: IInputSearch<string> = {
  searchValue: 'yare',
  onSearchValue: mockSearchValue,
  onChange: changeData,
  placeholder: 'Selecciona',
  labelNoOption: 'No encontramos ningun elemento',
};
function InputSearchMock(props: IInputSearch<string>) {
  return <InputSearch {...props} />;
}

const setup = (props: IInputSearch<string> = { ...DEFAULT_PROPS }) => {
  const utils = render(<InputSearchMock {...props} />);
  return { ...utils };
};

describe('InputSearch', () => {
  test('should render', () => {
    const { getByLabelText } = setup();
    const inputSearch = getByLabelText('InputSearch');
    expect(inputSearch).toBeInTheDocument();
  });

  test('should render input', () => {
    const { getByLabelText } = setup();
    const input = getByLabelText('SearchTexbox') as HTMLInputElement;
    expect(input).toBeInTheDocument();
  });

  test('should update value with onSearchValue', () => {
    const changeValue = 'new value';
    const { getByLabelText } = setup();
    const input = getByLabelText('SearchTexbox') as HTMLInputElement;
    input.value = changeValue;
    expect(input.value).toBe(changeValue);
    fireEvent.change(input, { target: { value: 'test' } });
    expect(mockSearchValue).toHaveBeenCalledWith('test');
  });

  test('should render placeholder when value is null', () => {
    const { getByLabelText } = setup();
    const input = getByLabelText('SearchTexbox') as HTMLInputElement;
    expect(input.placeholder).toBe('Selecciona');
  });

  test('should show list when input focus', () => {
    const { getByLabelText } = setup();
    const input = getByLabelText('SearchTexbox') as HTMLInputElement;
    const list = getByLabelText('ListOptions');
    fireEvent.focus(input);
    expect(list).toHaveStyle('opacity: 1');
  });

  test('should show loading', () => {
    const { getByLabelText } = setup({
      loading: true,
      ...DEFAULT_PROPS,
    });
    const list = getByLabelText('ListOptions');
    const loading = within(list).getByTestId('loading');
    const label = within(list).queryByLabelText('LabelNoOptions');
    const options = within(list).queryByLabelText('Options');

    expect(loading).toBeInTheDocument();
    expect(label).not.toBeInTheDocument();
    expect(options).not.toBeInTheDocument();
  });

  test('should show label without options', () => {
    const { getByLabelText } = setup();
    const list = getByLabelText('ListOptions');
    expect(list.textContent).toBe('No encontramos ningun elemento');
  });

  test('should render list options', () => {
    const { getByText } = setup({
      value: null,
      options: options,
      ...DEFAULT_PROPS,
    });
    options.forEach(({ label }) => {
      expect(getByText(label)).toBeInTheDocument();
    });
  });

  test('should change value', () => {
    const { getByText } = setup({
      options: options,
      ...DEFAULT_PROPS,
    });

    const item = getByText('Rafa');
    fireEvent.click(item);
    expect(changeData).toHaveBeenCalledWith({ label: 'Rafa', value: 'rafael' });
  });

  test('should be disabled', () => {
    const { getByLabelText, queryByLabelText } = setup({
      value: { label: 'Rafa', value: 'rafael' },
      clearable: true,
      disabled: true,
      ...DEFAULT_PROPS,
    });
    const input = getByLabelText('SearchTexbox');
    const cleanBtn = getByLabelText('CleanBtn');
    const listOpt = queryByLabelText('ListOptions');
    expect(input).toBeDisabled();
    expect(cleanBtn).toBeDisabled();
    expect(listOpt).not.toBeInTheDocument();
  });

  test('icon should have class disabled', () => {
    const { getByLabelText } = setup({
      disabled: true,
      ...DEFAULT_PROPS,
    });

    const iconSearch = getByLabelText('IconSearch');
    expect(iconSearch).toHaveClass('input__close__button__icon__disabled');
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
    'should render variant class %s',
    variant => {
      const { getByLabelText } = setup({
        value: { label: 'Rafa', value: 'rafael' },
        variant,
        ...DEFAULT_PROPS,
      });
      const input = getByLabelText('SearchTexbox');
      const cleanBtn = getByLabelText('CleanBtn');
      expect(input).toHaveClass(`input__${variant}`);
      expect(cleanBtn).toHaveClass(`button__${variant}`);
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
  ] satisfies TallDefaultVariants[])(
    'cleanBtn should render variant fill class %s',
    variant => {
      const { getByLabelText } = setup({
        value: { label: 'Rafa', value: 'rafael' },
        fillCloseButton: false,
        variant,
        ...DEFAULT_PROPS,
      });
      const cleanBtn = getByLabelText('CleanBtn');
      expect(cleanBtn).toHaveClass(`button__outline-${variant}`);
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
  ] satisfies TallDefaultVariants[])(
    'loading should render variant class %s',
    variant => {
      const { getByTestId } = setup({
        loading: true,
        variant,
        ...DEFAULT_PROPS,
      });
      const loading = getByTestId('loading');
      expect(loading).toHaveClass(`loading__${variant}`);
    },
  );

  test.each(['xs', 'sm', 'md', 'lg'] satisfies TallSizes[])(
    'should render size class %s',
    size => {
      const { getByLabelText } = setup({
        size,
        ...DEFAULT_PROPS,
      });
      const input = getByLabelText('SearchTexbox');
      expect(input).toHaveClass(`input__${size}`);
    },
  );

  test('should render custom item', () => {
    const { getByText } = setup({
      renderItem: val => <div>-- {val.label} --</div>,
      options,
      ...DEFAULT_PROPS,
    });
    options.forEach(({ label }) => {
      expect(getByText(`-- ${label} --`)).toBeInTheDocument();
    });
  });

  test('should clear value', () => {
    const { getByLabelText } = setup({
      value: { label: 'Rafa', value: 'rafael' },
      options: options,
      ...DEFAULT_PROPS,
    });
    const cleanBtn = getByLabelText('CleanBtn');
    fireEvent.click(cleanBtn);
    expect(changeData).toHaveBeenCalledWith(null);
  });


    test('should hidden list when click document', () => {
      const { getByLabelText } = setup();
      const input = getByLabelText('SearchTexbox') as HTMLInputElement;
      const list = getByLabelText('ListOptions');
      fireEvent.focus(input);
      fireEvent.click(document);
      expect(list).toHaveStyle('opacity: 0');
    });
});
