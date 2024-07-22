import { useEffect, useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { useArgs } from '@storybook/preview-api';
import {
  ALL_DEFAULT_VARIANTS,
  ALL_SIZES,
  ALL_VARIANTS,
  SIZE_SM,
  VARIANT_PRIMARY,
} from '../constants';
import { Default as AvatarStorie } from '../Avatar/Avatar.stories';
import InputSearch, { IOptionInputSearch } from '.';
import Avatar from '../Avatar';

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
      exclude: ['children'],
    },
  },
  argTypes: {
    value: {
      control: false,
      description: 'Value selected',
    },
    loading: {
      control: 'boolean',
    },
    variant: {
      control: 'radio',
      options: ALL_DEFAULT_VARIANTS,
    },
    size: {
      control: 'radio',
      options: ALL_SIZES,
    },
    disabled: {
      control: 'boolean',
    },
    closeButtonVariant: {
      control: 'radio',
      options: ALL_VARIANTS,
    },
    clearable: {
      control: 'boolean',
    },
    labelNoOption: {
      control: 'text',
    },
    options: {
      description: 'array options',
      control: false,
    },
    renderItem: {
      description: 'Custom item component',
    },
    searchValue: {
      description: 'get usestate searchValue',
      control: false,
    },
    onSearchValue: {
      description: 'set usestate on searchValue',
    },
  },
  args: {
    loading: false,
    variant: VARIANT_PRIMARY,
    size: SIZE_SM,
    disabled: false,
    clearable: true,
    placeholder: 'Selecciona una opción',
    labelNoOption: 'Sin opciones',
    closeButtonVariant: VARIANT_PRIMARY,
    renderItem: undefined,
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

export const Default: Story = {
  render: function Render(args) {
    const { selected, searchValue, options, setSelected, setSearchValue } =
      useSearchApi();

    return (
      <div className="flex h-96">
        <InputSearch
          {...args}
          value={selected}
          options={options}
          onChange={val => setSelected(val)}
          searchValue={searchValue}
          onSearchValue={val => setSearchValue(val)}
        />
      </div>
    );
  },
};

const customItem = (val: IOptionInputSearch<Character>) => {
  return (
    <div className="flex items-center gap-4">
      <Avatar {...AvatarStorie.args} size="sm" src={val.value.image} />
      <div>
        <p>{val.label}</p>
        <span className="text-xs text-base-300">{val.value.origin.name}</span>
      </div>
    </div>
  );
};

export const CustomItem: Story = {
  args: {
    ...Default.args,
    renderItem: val => customItem(val as IOptionInputSearch<Character>),
  },
  render: function Render(args) {
    const { selected, searchValue, options, setSelected, setSearchValue } =
      useSearchApi();

    return (
      <div className="flex h-96">
        <InputSearch
          {...args}
          value={selected}
          options={options}
          onChange={val => setSelected(val)}
          searchValue={searchValue}
          onSearchValue={val => setSearchValue(val)}
        />
      </div>
    );
  },
};
