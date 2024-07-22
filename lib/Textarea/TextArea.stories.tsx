import { Meta, StoryFn as Story } from '@storybook/react';
import { ALL_DEFAULT_VARIANTS, VARIANT_PRIMARY } from '../constants';
import Textarea, { ITextArea } from '.';

export default {
  title: 'DATA INPUT/TextArea',
  component: Textarea,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'radio',
      options: ALL_DEFAULT_VARIANTS,
    },
    placeholder: {
      control: 'text',
    },
    className: {
      control: 'text',
    },
    disabled: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Textarea>;

export const Default: Story<ITextArea> = args => {
  return <Textarea {...args} />;
};

Default.args = {
  placeholder: 'Escribe tu texto',
  variant: VARIANT_PRIMARY,
  disabled: false,
  className: '',
};
