import type { Meta, StoryObj } from '@storybook/react';
import { useArgs } from '@storybook/preview-api';
import Sidebar from '.';
import { twMerge } from 'tailwind-merge';
import imageLogo from '../assets/img/logo.png';

const meta: Meta<typeof Sidebar> = {
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

export default meta;

type Story = StoryObj<typeof Sidebar>;

const logo = {
  src: imageLogo,
  alt: 'Logo',
};

export const Default: Story = {
  args: {
    width: 250,
    minWidth: 250,
    open: true,
    right: false,
    className: '',
  },

  render: function Render(args) {
    const [, updateArgs] = useArgs();

    return (
      <div className="flex">
        <Sidebar {...args}>
          <Sidebar.Header>
            <img src={logo.src} alt={logo.alt} className="h-20" />
          </Sidebar.Header>
          <Sidebar.Content className="px-5 py-6">
            <Sidebar.Category title="Menu" />
          </Sidebar.Content>
          <Sidebar.Footer>
            <span className="text-sm font-semibold">@Turink {new Date().getFullYear()}</span>
          </Sidebar.Footer>
        </Sidebar>
        <Sidebar.BackDrop
          onClick={() => {
            updateArgs({ open: false });
          }}
          className={twMerge(!args.open && 'hidden')}
        />
        <main className={twMerge('flex-1 min-w-0 h-screen overflow-y-auto', args.right && 'order-1')}>
          <div className="px-6 py-8 mx-auto max-w-screen-2xl">
            <h1>hola mundo</h1>
          </div>
        </main>
      </div>
    );
  },
};