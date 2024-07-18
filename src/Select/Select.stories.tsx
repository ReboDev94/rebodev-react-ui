import { Meta, StoryFn as Story } from '@storybook/react';
import Select, { ISelect } from '.';
import {
  ALL_DEFAULT_VARIANTS,
  ALL_SIZES,
  SIZE_SM,
  VARIANT_PRIMARY,
} from '../constants';

export default {
  title: 'DATA INPUT/Select',
  component: Select,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'radio',
      options: ALL_SIZES,
    },
    variant: {
      control: 'radio',
      options: ALL_DEFAULT_VARIANTS,
    },

    className: {
      control: 'text',
    },
    disabled: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Select>;

export const Default: Story<ISelect> = args => {
  return (
    <Select {...args}>
      <Select.Option value="item_1">Item 1</Select.Option>
      <Select.Option value="item_2">Item 2</Select.Option>
      <Select.Option value="item_2">Item 3</Select.Option>
    </Select>
  );
};

Default.args = {
  size: SIZE_SM,
  variant: VARIANT_PRIMARY,
  disabled: false,
  className: '',
};
