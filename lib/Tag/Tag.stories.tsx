import type { Meta, StoryObj } from '@storybook/react';
import Tag from '.';
import { ALL_DEFAULT_VARIANTS, VARIANT_PRIMARY } from '../constants';
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
      options: ALL_DEFAULT_VARIANTS,
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
  variant: VARIANT_PRIMARY,
  placeholder: 'Agrega nuevos items',
  disabled: false,
  className: '',
};
