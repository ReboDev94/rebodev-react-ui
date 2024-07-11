import type { Meta, StoryObj } from '@storybook/react';
import { useArgs } from '@storybook/preview-api';
import InputSearch, { IOptionInputSearch } from '.';
import { useEffect, useState } from 'react';
import {
  IInputSearch,
  ObjetoOString,
  SIZES_INPUT,
  VARIANTS_INPUT,
} from '../shared/interfaces/inputInterfaces';
import {
  SIZE_SM,
  VARIANT_OUTLINE_PRIMARY,
  VARIANT_PRIMARY,
} from '../constants';

interface ApiResponse {
  info: Info;
  results: Character[];
}

interface Info {
  count: number;
  pages: number;
  next: string;
  prev: null;
}

interface Character {
  id: number;
  name: string;
  status: Status;
  species: Species;
  type: string;
  gender: Gender;
  origin: Location;
  location: Location;
  image: string;
  episode: string[];
  url: string;
  created: Date;
}

enum Gender {
  Female = 'Female',
  Male = 'Male',
}

interface Location {
  name: string;
  url: string;
}

enum Species {
  Alien = 'Alien',
  Cronenberg = 'Cronenberg',
  Human = 'Human',
  Humanoid = 'Humanoid',
}

enum Status {
  Alive = 'Alive',
  Dead = 'Dead',
  Unknown = 'unknown',
}

const meta: Meta<typeof InputSearch> = {
  title: 'DATA INPUT/InputSearch',
  component: InputSearch,
  tags: ['autodocs'],
  parameters: {
    controls: {
      exclude: [
        'searchValue',
        'onSearchValue',
        'value',
        'onChange',
        'options',
        'children',
        'renderItem',
      ],
    },
  },
  argTypes: {
    loading: {
      control: 'boolean',
    },
    variant: {
      control: 'radio',
      options: VARIANTS_INPUT,
    },
    errorState: {
      control: 'boolean',
    },
    sizeType: {
      control: 'radio',
      options: SIZES_INPUT,
    },
    disabled: {
      control: 'boolean',
    },
    buttonClearProps: {
      control: 'object',
    },
    clearable: {
      control: 'boolean',
    },
    labelNoOption: {
      control: 'text',
    },
  },
} satisfies Meta<typeof InputSearch>;

export default meta;
type Story = StoryObj<typeof InputSearch>;

const useSearchApi = () => {
  const [, updateArgs] = useArgs();
  const [searchValue, setSearchValue] = useState<string>('');
  const [selected, setSelected] =
    useState<IOptionInputSearch<Character> | null>(null);
  const [options, setOptions] = useState<IOptionInputSearch<Character>[]>([]);

  const onGetData = async () => {
    updateArgs({ loading: true });
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/?name=${searchValue}`,
    );
    if (!response.ok) {
      setOptions([]);
      throw new Error('Network response was not ok');
    }
    const data: ApiResponse = await response.json();

    const options = data.results.map(item => {
      return { label: item.name, value: item };
    });
    setOptions(options);
    updateArgs({ loading: false });
  };

  useEffect(() => {
    const timeOut = setTimeout(() => {
      if (searchValue) onGetData();
    }, 1000);
    return () => clearTimeout(timeOut);
  }, [searchValue]);

  return { searchValue, setSearchValue, selected, setSelected, options };
};

const DEFAULT_DATA: Partial<IInputSearch<ObjetoOString>> = {
  loading: false,
  variant: VARIANT_PRIMARY,
  errorState: false,
  sizeType: SIZE_SM,
  disabled: false,
  clearable: true,
  labelNoOption: 'Sin opciones',
  buttonClearProps: {
    variant: VARIANT_OUTLINE_PRIMARY,
  },
};

export const Default: Story = {
  args: { ...DEFAULT_DATA },
  render: function Render(args) {
    const { selected, searchValue, options, setSelected, setSearchValue } =
      useSearchApi();

    return (
      <div className="flex h-96">
        <InputSearch
          {...args}
          value={selected}
          options={options}
          searchValue={searchValue}
          onChange={val => setSelected(val)}
          onSearchValue={val => setSearchValue(val)}
        />
      </div>
    );
  },
};
