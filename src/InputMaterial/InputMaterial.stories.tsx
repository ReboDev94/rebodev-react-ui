import { Meta, StoryFn as Story } from '@storybook/react';
import InputMaterial, { IInputMaterial } from '.';
import { Default as InputStorie } from '../Input/Input.stories';
import { ALL_DEFAULT_VARIANTS, VARIANT_PRIMARY } from '../constants';
import Input from '../Input';

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
  },
} satisfies Meta<typeof InputMaterial>;

export const Default: Story<IInputMaterial> = args => {
  return (
    <InputMaterial {...args}>
      <Input
        {...InputStorie.args}
        variant={args.variant}
        id={args.id}
        placeholder=" "
      />
    </InputMaterial>
  );
};

Default.args = {
  id: 'email',
  title: 'Correo electrónico',
  variant: VARIANT_PRIMARY,
};
