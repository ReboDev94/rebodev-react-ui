import { Meta, StoryFn as Story } from '@storybook/react';
import FormGroupMaterial, { IFormGroupMaterial } from '.';
import Input from '../Input';
import { Default as InputStorie } from '../Input/Input.stories';
import { VARIANT_PRIMARY } from '../constants';
import { VARIANTS_INPUT } from '../shared/interfaces/inputInterfaces';

export default {
  title: 'DATA INPUT/Input Material',
  component: FormGroupMaterial,
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
} satisfies Meta<typeof FormGroupMaterial>;

export const Default: Story<IFormGroupMaterial> = args => {
  return (
    <FormGroupMaterial {...args}>
      <Input
        {...InputStorie.args}
        variant={args.variant}
        errorState={args.errorState}
        type="email"
        id="email"
        placeholder=" "
      />
    </FormGroupMaterial>
  );
};

Default.args = {
  id: 'email',
  title: 'Correo electrónico',
  variant: VARIANT_PRIMARY,
  errorState: false,
};
