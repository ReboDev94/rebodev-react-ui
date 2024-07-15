import type { Meta, StoryObj } from '@storybook/react';
import Loading from './Loading';
import { ALL_SIZES, SIZE_XS, VARIANT_PRIMARY } from '../constants';
import { VARIANTS_LOADING } from './interfaces';

const meta = {
  title: 'GENERAL/Loading',
  component: Loading,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    className: {
      control: 'text',
    },
    size: {
      control: 'radio',
      options: ALL_SIZES,
    },
    variant: {
      control: 'radio',
      options: VARIANTS_LOADING,
    },
  },
} satisfies Meta<typeof Loading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
Default.args = {
  className: '',
  size: SIZE_XS,
  variant: VARIANT_PRIMARY,
};
