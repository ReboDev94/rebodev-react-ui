import { Meta, StoryFn as Story } from '@storybook/react';
import Form, { IForm } from '.';
import Input from '../Input';
import Button from '../Button';

export default {
  title: 'UI/Form',
  component: Form,
  tags: ['autodocs'],
} satisfies Meta<typeof Form>;

export const Default: Story<IForm> = (args) => {
  return (
    <Form {...args} className="flex flex-col gap-4 w-96">
      <div>
        <Form.Label title="Correo electrónico">
          <Input type="email" variant="primary" placeholder="rrrrebolledohdz@gmail.com" />
        </Form.Label>
      </div>
      <div>
        <Form.Label title="Contraseña">
          <Input type="password" variant="primary" placeholder="**************" />
        </Form.Label>
      </div>
      <div>
        <Button type="submit" block>
          Submit
        </Button>
      </div>
    </Form>
  );
};
