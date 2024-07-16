import { Meta, StoryFn as Story } from '@storybook/react';
import {
  SIZES_INPUT,
  VARIANTS_INPUT,
} from '../shared/interfaces/inputInterfaces';
import Select, { ISelect } from '.';
import { SIZE_SM, VARIANT_PRIMARY } from '../constants';

export default {
  title: 'DATA INPUT/Select',
  component: Select,
  tags: ['autodocs'],
  argTypes: {
    sizeType: {
      control: 'radio',
      options: SIZES_INPUT,
    },
    variant: {
      control: 'radio',
      options: VARIANTS_INPUT,
    },
    errorState: {
      control: 'boolean',
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
  sizeType: SIZE_SM,
  variant: VARIANT_PRIMARY,
  errorState: false,
  disabled: false,
  className: '',
};
