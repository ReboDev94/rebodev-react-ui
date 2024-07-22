import { Meta, StoryFn as Story } from '@storybook/react';
import { Default as InputStorie } from '../Input/Input.stories';
import ErrorInput, { IErrorInput } from '.';
import Input from '../Input';

export default {
  title: 'DATA INPUT/ErrorInput',
  component: ErrorInput,
  tags: ['autodocs'],
  argTypes: {
    message: {
      control: 'text',
    },
  },
} satisfies Meta<typeof ErrorInput>;

export const Default: Story<IErrorInput> = args => {
  return (
    <div className="">
      <Input {...InputStorie.args} />
      <ErrorInput {...args} />
    </div>
  );
};

Default.args = { message: 'El correo electrónico no es valido' };
