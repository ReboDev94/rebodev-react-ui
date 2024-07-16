import type { Meta, StoryObj } from '@storybook/react';
import Avatar, { IAvatar } from '.';
import {
  ALL_SHAPES,
  ALL_SIZES,
  SHAPE_CIRCLE,
  SIZE_MD,
  VARIANT_BASE,
} from '../constants';
import { VARIANTS_AVATAR } from './interfaces';

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
    borderVariant: {
      control: 'radio',
      options: VARIANTS_AVATAR,
    },
    bgVariant: {
      control: 'radio',
      options: VARIANTS_AVATAR,
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

const DEFAULT_ARGS: Partial<IAvatar> = {
  size: SIZE_MD,
  shape: SHAPE_CIRCLE,
  border: false,
  borderVariant: VARIANT_BASE,
  bgVariant: VARIANT_BASE,
  title: 'R',
  src: '',
  className: '',
};

export const Default: Story = {};
Default.args = DEFAULT_ARGS;
