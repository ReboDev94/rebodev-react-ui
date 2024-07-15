import type { Meta, StoryObj } from '@storybook/react';
import ListGroup from '.';
import { ArrowDownIcon, IconSearch, IconX } from '../assets/svg';

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

export const Item: Story = {
  render: function Render(args) {
    return (
      <ListGroup {...args}>
        <ListGroup.Item icon={ArrowDownIcon} variant="primary">
          Item 1
        </ListGroup.Item>
        <ListGroup.Item icon={IconX} variant="primary">
          Item 2
        </ListGroup.Item>
        <ListGroup.Item icon={IconSearch} variant="primary">
          Item 3
        </ListGroup.Item>
      </ListGroup>
    );
  },
};

Default.args = {
  className: '',
};
