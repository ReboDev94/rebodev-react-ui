import type { Meta, StoryObj } from '@storybook/react';
import { IconX } from '../assets/svg';
import ListGroup from '.';

const meta = {
  title: 'GENERAL/ListGroup',
  component: ListGroup,
  tags: ['autodocs'],
  argTypes: {
    className: {
      control: 'text',
    },
  },
} satisfies Meta<typeof ListGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: function Render(args) {
    return (
      <ListGroup {...args}>
        <ListGroup.Item>Item 1</ListGroup.Item>
        <ListGroup.Item>Item 2</ListGroup.Item>
        <ListGroup.Item>Item 3</ListGroup.Item>
      </ListGroup>
    );
  },
};

export const ItemVariant: Story = {
  render: function Render(args) {
    return (
      <ListGroup {...args}>
        <ListGroup.Item icon={IconX} variant="primary">
          Item 1
        </ListGroup.Item>
        <ListGroup.Item icon={IconX} variant="secondary">
          Item 2
        </ListGroup.Item>
        <ListGroup.Item icon={IconX} variant="success">
          Item 3
        </ListGroup.Item>
        <ListGroup.Item icon={IconX} variant="error">
          Item 4
        </ListGroup.Item>
        <ListGroup.Item icon={IconX} variant="warning">
          Item 5
        </ListGroup.Item>
        <ListGroup.Item icon={IconX} variant="info">
          Item 6
        </ListGroup.Item>
        <ListGroup.Item icon={IconX} variant="light">
          Item 7
        </ListGroup.Item>
        <ListGroup.Item icon={IconX} variant="dark">
          Item 8
        </ListGroup.Item>
      </ListGroup>
    );
  },
};

Default.args = {
  className: '',
};
