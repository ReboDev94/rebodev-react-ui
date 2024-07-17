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
          onClick={() => {
            console.log(`click Dashboard`);
          }}
          title="Dashboard"
          icon={IconX}
        />
        <Menu.ItemSidebar
          active={false}
          onClick={() => {
            console.log(`click Users`);
          }}
          title="Users"
          icon={IconSearch}
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
            onClick={() => {
              console.log(`click Dashboard`);
            }}
            title="Dashboard"
            icon={IconX}
          />
          <Menu.ItemSidebar
            active={false}
            onClick={() => {
              console.log(`click Users`);
            }}
            title="Users"
            icon={IconSearch}
          />
        </CollapseSidebar>
      </Menu>
    );
  },
};
