import type { Meta, StoryObj } from '@storybook/react';
import { ALL_SIZES, SIZE_MD, VARIANT_PRIMARY } from '../constants';
import { VARIANT_BTN } from './styles';
import Button, { IButton } from '.';

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
      options: VARIANT_BTN,
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

const DEFAULT_ARGS: Partial<IButton> = {
  variant: VARIANT_PRIMARY,
  size: SIZE_MD,
  block: false,
  disabled: false,
  children: 'Button',
};

export const Default: Story = {};
Default.args = DEFAULT_ARGS;
