import type { Meta, StoryFn as Story } from '@storybook/react';
import Sidebar, { ISidebar } from '.';
import { IconSearch } from '../assets/svg';
import { twMerge } from 'tailwind-merge';
import imageLogo from '../assets/img/logo.png';
import { useState } from 'react';

export default {
  title: 'GENERAL/Sidebar',
  component: Sidebar,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    controls: {
      exclude: ['children'],
    },
  },
  argTypes: {
    width: {
      control: 'number',
    },
  },
} satisfies Meta<typeof Sidebar>;

// const MENU_DATA = [
//   {
//     title: 'Dashboard',
//     url: '/dashboard',
//     icon: IconSearch,
//     active: false,
//   },
//   {
//     title: 'Escuela',
//     url: '/profile/school',
//     icon: IconSearch,
//     active: false,
//   },
//   {
//     title: 'Usuarios',
//     url: '/user',
//     icon: IconSearch,
//     active: false,
//   },
//   {
//     title: 'Estudiantes',
//     url: '/student',
//     icon: IconSearch,
//     active: false,
//   },
//   {
//     title: 'Grupos',
//     url: '/group',
//     icon: IconSearch,
//     active: false,
//   },
// ];

const logo = {
  src: imageLogo,
  alt: 'Logo',
};

export const Default: Story<ISidebar> = (args) => {
  return (
    <div className="flex">
      <Sidebar {...args}>
        <Sidebar.Header>
          <img src={logo.src} alt={logo.alt} className="h-20" />
        </Sidebar.Header>
        <Sidebar.Content className="px-5 py-6">
          <Sidebar.Category title="Menu" />
          {/* <Menu>
            {MENU_DATA.map(({ title, icon, url }) => (
              <Menu.ItemSidebar
                key={uuidv4()}
                active={pathname === url}
                onClick={() => clickItem(url)}
                title={title}
                icon={icon}
              />
            ))}
          </Menu> */}
        </Sidebar.Content>
        <Sidebar.Footer>
          <span className="text-sm font-semibold">@Turink {new Date().getFullYear()}</span>
        </Sidebar.Footer>
      </Sidebar>
      <Sidebar.BackDrop onClick={() => (args.open = false)} />
      <main className={twMerge('flex-1 min-w-0 h-screen overflow-y-auto', args.right && 'order-1')}>
        <div className="px-6 py-8 mx-auto max-w-screen-2xl">
          <h1>hola mundo</h1>
        </div>
      </main>
    </div>
  );
};
Default.args = {
  width: 250,
  minWidth: 250,
  open: true,
  right: false,
  className: '',
};
