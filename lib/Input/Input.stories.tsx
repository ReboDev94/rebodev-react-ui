import { Meta, StoryFn as Story } from '@storybook/react';
import {
  ALL_DEFAULT_VARIANTS,
  ALL_SIZES,
  SIZE_SM,
  VARIANT_PRIMARY,
} from '../constants';
import Input, { Iinput } from '.';

export default {
  title: 'DATA INPUT/Input',
  component: Input,
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
    placeholder: {
      control: 'text',
    },
    className: {
      control: 'text',
    },
    disabled: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Input>;

export const Default: Story<Iinput> = args => {
  return <Input {...args} />;
};

Default.args = {
  placeholder: 'rrrrebolledohdz@gmail.com',
  size: SIZE_SM,
  variant: VARIANT_PRIMARY,
  disabled: false,
  className: '',
  type: 'email',
};

export const File: Story<Iinput> = () => {
  return <Input {...Default.args} type="file" />;
};
