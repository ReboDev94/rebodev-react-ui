import type { Meta, StoryObj } from '@storybook/react';
import { MENU_DATA_DUMMY } from '../utils';
import Menu from '.';
import CollapseSidebar from './CollapseSidebar';
import { IconSearch } from '../assets/svg';

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
        {MENU_DATA_DUMMY.map(({ title, icon, url, active }) => (
          <Menu.ItemSidebar
            key={title}
            active={active}
            onClick={() => {
              console.log(`click ${title} - ${url}`);
            }}
            title={title}
            icon={icon}
          />
        ))}
      </Menu>
    );
  },
};

export const Collapse: Story = {
  render: function Render(args) {
    return (
      <Menu {...args}>
        <CollapseSidebar variant='primary' icon={IconSearch} title="Menu colapsado">
          {MENU_DATA_DUMMY.map(({ title, icon, url, active }) => (
            <Menu.ItemSidebar
              key={title}
              active={active}
              onClick={() => {
                console.log(`click ${title} - ${url}`);
              }}
              title={title}
              icon={icon}
            />
          ))}
        </CollapseSidebar>
      </Menu>
    );
  },
};
