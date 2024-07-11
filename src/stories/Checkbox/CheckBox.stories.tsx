import type { Meta, StoryObj } from '@storybook/react';
import Checkbox, { ICheckBox } from '.';
import { ALL_SIZES, SIZE_XS, VARIANT_ERROR } from '../constants';
import { VARIANTS_CHECKBOX } from './interfaces';

const meta = {
  title: 'GENERAL/CheckBox',
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
      options: VARIANTS_CHECKBOX,
    },
    sizeCheck: {
      control: 'radio',
      options: ALL_SIZES,
    },
    className: {
      control: 'text',
    },
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

const DEFAULT_ARGS: Partial<ICheckBox> = {
  id: 'check',
  sizeCheck: SIZE_XS,
  variant: VARIANT_ERROR,
  className: '',
};

export const Default: Story = {};
Default.args = DEFAULT_ARGS;
