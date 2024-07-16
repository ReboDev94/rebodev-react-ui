import { Meta, StoryFn as Story } from '@storybook/react';
import { VARIANTS_INPUT } from '../shared/interfaces/inputInterfaces';
import Textarea, { ITextArea } from '.';
import { VARIANT_PRIMARY } from '../constants';

export default {
  title: 'DATA INPUT/TextArea',
  component: Textarea,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'radio',
      options: VARIANTS_INPUT,
    },
    errorState: {
      control: 'boolean',
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
  errorState: false,
  disabled: false,
  className: '',
};
