import type { Meta, StoryObj } from '@storybook/react';
import { IconSearch, IconX } from '../assets/svg';
import Menu from '.';

const meta = {
  title: 'GENERAL/Menu',
  component: Menu,
  tags: ['autodocs'],
} satisfies Meta<typeof Menu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: function Render(args) {
    return (
      <Menu {...args}>
        <Menu.Item
          active={true}
          variant="primary"
          title="Item 1"
          icon={IconX}
        />
        <Menu.Item
          active={true}
          variant="secondary"
          title="Item 2"
          icon={IconX}
        />
        <Menu.Item
          active={true}
          variant="success"
          title="Item 3"
          icon={IconX}
        />
        <Menu.Item
          active={true}
          variant="error"
          title="Item 4"
          icon={IconX}
        />
        <Menu.Item
          active={true}
          variant="warning"
          title="Item 5"
          icon={IconX}
        />
        <Menu.Item
          active={true}
          variant="info"
          title="Item 6"
          icon={IconX}
        />
        <Menu.Item
          active={true}
          variant="light"
          title="Item 7"
          icon={IconX}
        />
        <Menu.Item
          active={true}
          variant="dark"
          title="Item 8"
          icon={IconX}
        />
      </Menu>
    );
  },
};

export const ActiveFalse: Story = {
  render: function Render(args) {
    return (
      <Menu {...args}>
        <Menu.Item
          variant="primary"
          title="Item 1"
          icon={IconX}
        />
        <Menu.Item
          variant="secondary"
          title="Item 2"
          icon={IconX}
        />
        <Menu.Item
          variant="success"
          title="Item 3"
          icon={IconX}
        />
        <Menu.Item
          variant="error"
          title="Item 4"
          icon={IconX}
        />
        <Menu.Item
          variant="warning"
          title="Item 5"
          icon={IconX}
        />
        <Menu.Item
          variant="info"
          title="Item 6"
          icon={IconX}
        />
        <Menu.Item
          variant="light"
          title="Item 7"
          icon={IconX}
        />
        <Menu.Item
          variant="dark"
          title="Item 8"
          icon={IconX}
        />
      </Menu>
    );
  },
};

export const Collapse: Story = {
  render: function Render(args) {
    return (
      <Menu {...args}>
        <Menu.Collapse
          variant="primary"
          icon={IconSearch}
          title="Menu colapsado"
        >
          <Menu.Item
            active={true}
            variant="primary"
            title="Item 1"
            icon={IconX}
          />
          <Menu.Item
            active={true}
            variant="secondary"
            title="Item 2"
            icon={IconX}
          />
          <Menu.Item
            active={true}
            variant="success"
            title="Item 3"
            icon={IconX}
          />
        </Menu.Collapse>
      </Menu>
    );
  },
};
