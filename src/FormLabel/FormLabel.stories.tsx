import { Meta, StoryFn as Story } from '@storybook/react';
import FormLabel, { IFormLabel } from '.';
import Input from '../Input';
import { Default as InputStorie } from '../Input/Input.stories';
import { ALL_POSITIONS_LABEL } from '../constants';

export default {
  title: 'Form/FormLabel',
  component: FormLabel,
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
    className: {
      control: 'text',
    },
    position: {
      control: 'radio',
      options: ALL_POSITIONS_LABEL,
    },
  },
} satisfies Meta<typeof FormLabel>;

export const Default: Story<IFormLabel> = args => {
  return (
    <FormLabel {...args}>
      <Input type="email" {...InputStorie.args} />
    </FormLabel>
  );
};

Default.args = {
  title: 'Correo Electrónico',
  position: 'LT',
  className: '',
};
