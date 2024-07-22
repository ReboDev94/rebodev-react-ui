import type { Meta, StoryObj } from '@storybook/react';
import {
  ALL_SIZES,
  ALL_VARIANTS,
  SIZE_SM,
  VARIANT_PRIMARY,
} from '../constants';
import Button from '.';

const meta = {
  title: 'GENERAL/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'radio',
      options: ALL_SIZES,
    },
    variant: {
      control: 'radio',
      options: ALL_VARIANTS,
    },
    block: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
Default.args = {
  variant: VARIANT_PRIMARY,
  size: SIZE_SM,
  block: false,
  disabled: false,
  children: 'Button',
};
