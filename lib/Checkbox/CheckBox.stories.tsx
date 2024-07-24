import type { Meta, StoryObj } from '@storybook/react';
import {
  ALL_DEFAULT_VARIANTS,
  ALL_SIZES,
  SIZE_XS,
  VARIANT_PRIMARY,
} from '../constants';
import Checkbox from '.';

const meta = {
  title: 'DATA INPUT/CheckBox',
  component: Checkbox,
  tags: ['autodocs'],
  parameters: {
    controls: {
      exclude: ['children'],
    },
  },
  argTypes: {
    id: {
      control: 'text',
    },
    variant: {
      control: 'radio',
      options: ALL_DEFAULT_VARIANTS,
    },
    size: {
      control: 'radio',
      options: ALL_SIZES,
    },
    className: {
      control: 'text',
    },
    disabled: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: 'check',
    size: SIZE_XS,
    variant: VARIANT_PRIMARY,
    disabled: false,
    className: '',
  },
};
