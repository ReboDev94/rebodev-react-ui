import type { Meta, StoryObj } from '@storybook/react';
import { MENU_DATA_DUMMY } from '../utils';
import Menu from '.';

const meta = {
  title: 'GENERAL/Menu',
  component: Menu,
  tags: ['autodocs'],
} satisfies Meta<typeof Menu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
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
