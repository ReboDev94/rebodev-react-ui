import type { Meta, StoryObj } from '@storybook/react';
import Menu from '.';
import CollapseSidebar from './CollapseSidebar';
import { IconSearch, IconX } from '../assets/svg';

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
        <Menu.ItemSidebar
          active={true}
          variant="primary"
          onClick={() => {}}
          title="Item 1"
          icon={IconX}
        />
        <Menu.ItemSidebar
          active={true}
          variant="secondary"
          onClick={() => {}}
          title="Item 2"
          icon={IconX}
        />
        <Menu.ItemSidebar
          active={true}
          variant="success"
          onClick={() => {}}
          title="Item 3"
          icon={IconX}
        />
        <Menu.ItemSidebar
          active={true}
          variant="error"
          onClick={() => {}}
          title="Item 4"
          icon={IconX}
        />
        <Menu.ItemSidebar
          active={true}
          variant="warning"
          onClick={() => {}}
          title="Item 5"
          icon={IconX}
        />
        <Menu.ItemSidebar
          active={true}
          variant="info"
          onClick={() => {}}
          title="Item 6"
          icon={IconX}
        />
        <Menu.ItemSidebar
          active={true}
          variant="light"
          onClick={() => {}}
          title="Item 7"
          icon={IconX}
        />
        <Menu.ItemSidebar
          active={true}
          variant="dark"
          onClick={() => {}}
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
        <Menu.ItemSidebar
          variant="primary"
          onClick={() => {}}
          title="Item 1"
          icon={IconX}
        />
        <Menu.ItemSidebar
          variant="secondary"
          onClick={() => {}}
          title="Item 2"
          icon={IconX}
        />
        <Menu.ItemSidebar
          variant="success"
          onClick={() => {}}
          title="Item 3"
          icon={IconX}
        />
        <Menu.ItemSidebar
          variant="error"
          onClick={() => {}}
          title="Item 4"
          icon={IconX}
        />
        <Menu.ItemSidebar
          variant="warning"
          onClick={() => {}}
          title="Item 5"
          icon={IconX}
        />
        <Menu.ItemSidebar
          variant="info"
          onClick={() => {}}
          title="Item 6"
          icon={IconX}
        />
        <Menu.ItemSidebar
          variant="light"
          onClick={() => {}}
          title="Item 7"
          icon={IconX}
        />
        <Menu.ItemSidebar
          variant="dark"
          onClick={() => {}}
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
        <CollapseSidebar
          variant="primary"
          icon={IconSearch}
          title="Menu colapsado"
        >
          <Menu.ItemSidebar
            active={true}
            variant="primary"
            onClick={() => {}}
            title="Item 1"
            icon={IconX}
          />
          <Menu.ItemSidebar
            active={true}
            variant="secondary"
            onClick={() => {}}
            title="Item 2"
            icon={IconX}
          />
          <Menu.ItemSidebar
            active={true}
            variant="success"
            onClick={() => {}}
            title="Item 3"
            icon={IconX}
          />
        </CollapseSidebar>
      </Menu>
    );
  },
};
