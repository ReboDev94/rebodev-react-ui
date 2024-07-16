import type { Meta, StoryObj } from '@storybook/react';
import Tag from '.';
import {
  SIZES_INPUT,
  VARIANTS_INPUT,
  VARIANTS_TAG,
} from '../shared/interfaces/inputInterfaces';
import { SIZE_XS, VARIANT_PRIMARY } from '../constants';
import { useState } from 'react';

const meta: Meta<typeof Tag> = {
  title: 'DATA INPUT/Tag',
  component: Tag,
  tags: ['autodocs'],
  argTypes: {
    placeholder: {
      control: 'text',
    },
    disabled: {
      control: 'boolean',
    },
    className: {
      control: 'text',
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
    variantTag: {
      control: 'radio',
      options: VARIANTS_TAG,
    },
    value: {
      description: 'Array values',
      control: false,
    },
    onChange: {
      description: 'change function',
      control: false,
    },
    onRemoved: {
      description: 'remove function',
      control: false,
    },
  },
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof Tag>;

export const Default: Story = {
  args: {},
  render: function Render(args) {
    const [value, setValues] = useState<string[]>([]);
    return (
      <Tag
        {...args}
        value={value}
        onChange={tags => setValues(tags)}
        onRemoved={tag => {
          const newValues = value.filter(item => item !== tag);
          setValues(newValues);
        }}
      />
    );
  },
};

Default.args = {
  variantTag: VARIANT_PRIMARY,
  variant: VARIANT_PRIMARY,
  errorState: false,
  sizeType: SIZE_XS,
  placeholder: 'Agrega nuevos items',
  disabled: false,
  className: '',
};
