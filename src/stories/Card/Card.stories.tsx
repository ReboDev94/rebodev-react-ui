import type { Meta, StoryObj } from '@storybook/react';
import Card from '.';
import { VARIANTS_CARD } from './interfaces';
import { VARIANT_DEFAULT } from '../constants';
import Form from '../Form';
import Input from '../Input';
import Button from '../Button';
import FormLabel from '../FormLabel';
import { Default as FormStorie } from '../Form/Form.stories';
import { Default as FormLabelStorie } from '../FormLabel/FormLabel.stories';
import { Default as InputStorie } from '../Input/Input.stories';
import { Default as ButtonStorie } from '../Button/Button.stories';
import { twMerge } from 'tailwind-merge';

const meta = {
  title: 'GENERAL/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    className: {
      control: 'text',
    },
    variant: {
      control: 'radio',
      options: VARIANTS_CARD,
    },
    bordered: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: function Render(args) {
    return (
      <Card {...args}>
        <img
          src="https://placehold.co/600x400/png"
          alt="placeholder"
          className="rounded-t-[inherit]"
        />
        <Card.Body>
          <Form
            {...FormStorie.args}
            className={twMerge(FormStorie.args?.className, 'w-full')}
          >
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
        </Card.Body>
      </Card>
    );
  },
};

Default.args = {
  variant: VARIANT_DEFAULT,
  bordered: true,
  className: 'w-96 shadow-sm',
};
