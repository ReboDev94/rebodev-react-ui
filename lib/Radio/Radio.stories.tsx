import type { Meta, StoryObj } from '@storybook/react';
import Radio from './Radio';
import {
  ALL_DEFAULT_VARIANTS,
  ALL_SIZES,
  SIZE_XS,
  VARIANT_PRIMARY,
} from '../constants';

const meta = {
  title: 'DATA INPUT/Radio',
  component: Radio,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'radio',
      options: ALL_SIZES,
    },
    disabled: {
      control: 'boolean',
    },
    variant: {
      control: 'radio',
      options: ALL_DEFAULT_VARIANTS.filter(item => item !== 'light'),
    },
  },
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
Default.args = {
  size: SIZE_XS,
  disabled: false,
  variant: VARIANT_PRIMARY,
};
