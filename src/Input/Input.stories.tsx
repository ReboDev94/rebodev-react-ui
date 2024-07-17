import { Meta, StoryFn as Story } from '@storybook/react';
import { SIZE_SM, VARIANT_PRIMARY } from '../constants';
import {
  SIZES_INPUT,
  VARIANTS_INPUT,
} from '../shared/interfaces/inputInterfaces';
import Input, { IInput } from '.';

export default {
  title: 'DATA INPUT/Input',
  component: Input,
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

const DEFAULT_ARGS: Partial<IInput> = {
  placeholder: 'rrrrebolledohdz@gmail.com',
  sizeType: SIZE_SM,
  variant: VARIANT_PRIMARY,
  errorState: false,
  disabled: false,
  className: '',
};

export const Default: Story<IInput> = args => {
  return <Input {...args} />;
};

Default.args = { ...DEFAULT_ARGS, type: 'email' };

export const File: Story<IInput> = () => {
  return <Input {...Default.args} type="file" />;
};
