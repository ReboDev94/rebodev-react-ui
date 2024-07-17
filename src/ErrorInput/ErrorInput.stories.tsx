import { Meta, StoryFn as Story } from '@storybook/react';

import { Default as InputStorie } from '../Input/Input.stories';
import Input from '../Input';
import ErrorInput, { IErrorInput } from '.';
import { VARIANT_ERROR } from '../constants';
import { VARIANTS_INPUT } from '../shared/interfaces/inputInterfaces';

export default {
  title: 'DATA INPUT/ErrorInput',
  component: ErrorInput,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'radio',
      options: VARIANTS_INPUT,
    },
    message: {
      control: 'text',
    },
  },
} satisfies Meta<typeof ErrorInput>;

const DEFAULT_ARGS: Partial<IErrorInput> = {
  message: 'El correo electrónico no es valido',
  variant: VARIANT_ERROR,
};

export const Default: Story<IErrorInput> = args => {
  return (
    <div className="">
      <Input {...InputStorie.args} />
      <ErrorInput {...args} />
    </div>
  );
};

Default.args = { ...DEFAULT_ARGS };
