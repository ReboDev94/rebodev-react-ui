import { Meta, StoryFn as Story } from '@storybook/react';
import InputMaterial, { IInputMaterial } from '.';
import Input from '../Input';
import { Default as InputStorie } from '../Input/Input.stories';
import { VARIANT_PRIMARY } from '../constants';
import { VARIANTS_INPUT } from '../shared/interfaces/inputInterfaces';

export default {
  title: 'DATA INPUT/Input Material',
  component: InputMaterial,
  tags: ['autodocs'],
  parameters: {
    controls: {
      exclude: ['children'],
    },
  },
  argTypes: {
    title: {
      control: 'text',
    },
    errorState: {
      control: 'boolean',
    },
    variant: {
      control: 'radio',
      options: VARIANTS_INPUT,
    },
  },
} satisfies Meta<typeof InputMaterial>;

export const Default: Story<IInputMaterial> = args => {
  return (
    <InputMaterial {...args}>
      <Input
        {...InputStorie.args}
        variant={args.variant}
        errorState={args.errorState}
        type="email"
        id="email"
        placeholder=" "
      />
    </InputMaterial>
  );
};

Default.args = {
  id: 'email',
  title: 'Correo electrónico',
  variant: VARIANT_PRIMARY,
  errorState: false,
};
