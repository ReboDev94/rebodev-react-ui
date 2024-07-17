import type { Meta, StoryObj } from '@storybook/react';
import Radio from './Radio';
import { ALL_SIZES, SIZE_XS, VARIANT_PRIMARY } from '../constants';
import { VARIANTS_RADIO } from './interfaces';

const meta = {
  title: 'DATA INPUT/Radio',
  component: Radio,
  tags: ['autodocs'],
  argTypes: {
    sizeRadio: {
      control: 'radio',
      options: ALL_SIZES,
    },
    variant: {
      control: 'radio',
      options: VARIANTS_RADIO,
    },
  },
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
Default.args = {
  sizeRadio: SIZE_XS,
  variant: VARIANT_PRIMARY,
};
