import type { Meta, StoryObj } from '@storybook/react';
import Avatar from '.';
import {
  ALL_SHAPES,
  ALL_SIZES,
  ALL_DEFAULT_VARIANTS,
  SHAPE_CIRCLE,
  SIZE_SM,
  VARIANT_PRIMARY,
} from '../constants';

const meta = {
  title: 'GENERAL/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  parameters: {
    controls: {
      exclude: ['children'],
    },
  },
  argTypes: {
    size: {
      control: 'radio',
      options: ALL_SIZES,
    },
    shape: {
      control: 'radio',
      options: ALL_SHAPES,
    },
    border: {
      control: 'boolean',
    },
    variant: {
      control: 'radio',
      options: ALL_DEFAULT_VARIANTS,
    },
    title: {
      control: 'text',
    },
    src: {
      control: 'text',
    },
    className: {
      control: 'text',
    },
  },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
Default.args = {
  size: SIZE_SM,
  shape: SHAPE_CIRCLE,
  border: false,
  variant: VARIANT_PRIMARY,
  title: 'R',
  src: '',
  className: '',
};
