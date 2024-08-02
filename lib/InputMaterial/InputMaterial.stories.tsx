import { Meta, StoryFn as Story } from '@storybook/react';
import InputMaterial, { IInputMaterial } from '.';
import {
  ALL_DEFAULT_VARIANTS,
  ALL_SIZES,
  SIZE_XS,
  VARIANT_PRIMARY,
} from '../constants';

export default {
  title: 'DATA INPUT/Input Material',
  component: InputMaterial,
  tags: ['autodocs'],
  argTypes: {
    id: {
      control: 'text',
    },
    title: {
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
} satisfies Meta<typeof InputMaterial>;

export const Default: Story<IInputMaterial> = args => {
  return <InputMaterial {...args} />;
};

Default.args = {
  id: 'email',
  title: 'Correo electrónico',
  variant: VARIANT_PRIMARY,
  size: SIZE_XS,
  disabled: false,
  className: '',
};
