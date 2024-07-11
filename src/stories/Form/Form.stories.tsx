import { Meta, StoryFn as Story } from '@storybook/react';
import Form, { IForm } from '.';
import FormLabel from '../FormLabel';
import Button from '../Button';
import Input from '../Input';
import { Default as FormLabelStorie } from '../FormLabel/FormLabel.stories';
import { Default as InputStorie } from '../Input/Input.stories';
import { Default as ButtonStorie } from '../Button/Button.stories';

export default {
  title: 'Form/Form',
  component: Form,
  tags: ['autodocs'],
} satisfies Meta<typeof Form>;

export const Default: Story<IForm> = args => {
  return (
    <Form {...args} className="flex flex-col gap-4 w-96">
      <div>
        <FormLabel {...FormLabelStorie.args} title="Correo electrónico">
          <Input {...InputStorie.args} type="email" />
        </FormLabel>
      </div>
      <div>
        <FormLabel {...FormLabelStorie.args} title="Contraseña">
          <Input
            {...InputStorie.args}
            type="password"
            placeholder="**************"
          />
        </FormLabel>
      </div>
      <div>
        <Button {...ButtonStorie.args} type="submit" block>
          Submit
        </Button>
      </div>
    </Form>
  );
};
