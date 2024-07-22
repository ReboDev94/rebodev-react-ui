import type { Meta, StoryFn as Story } from '@storybook/react';
import Modal, { IModal } from '.';
import Button from '../Button';
import { Default as ButtonStorie } from '../Button/Button.stories';
import { ALL_SIZES, SIZE_XS } from '../constants';
import { useArgs } from '@storybook/preview-api';

export default {
  title: 'GENERAL/Modal',
  component: Modal,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    exclude: ['children'],
  },
  argTypes: {
    value: {
      control: 'boolean',
    },
    size: {
      control: 'radio',
      options: ALL_SIZES,
    },
    backdrop: {
      control: 'boolean',
    },
    center: {
      control: 'boolean',
    },
    className: {
      control: 'text',
    },
  },
} as Meta;

export const Default: Story<IModal> = args => {
  const [, updateArgs] = useArgs();
  return (
    <div>
      <Button
        {...ButtonStorie.args}
        onClick={() => updateArgs({ value: true })}
      >
        Open Modal
      </Button>
      <Modal {...args}>
        <Modal.Header
          hiddenClose={false}
          onClose={() => updateArgs({ value: false })}
        >
          Modal Header
        </Modal.Header>
        <Modal.Body>Modal Body</Modal.Body>
        <Modal.Footer>Modal Footer</Modal.Footer>
      </Modal>
    </div>
  );
};
Default.args = {
  value: false,
  size: SIZE_XS,
  backdrop: true,
  center: true,
  className: '',
};
