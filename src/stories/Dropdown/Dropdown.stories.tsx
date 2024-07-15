import type { Meta, StoryObj } from '@storybook/react';
import { Default as AvatarStorie } from '../Avatar/Avatar.stories';
import Dropdown from '.';
import Avatar from '../Avatar';

const meta = {
  title: 'DATA INPUT/Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
  argTypes: {
    className: {
      control: 'text',
    },
  },
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: function Render(args) {
    return (
      <div className="grid w-full h-96 place-content-center">
        <Dropdown {...args}>
          <Dropdown.Toogle>Selecciona</Dropdown.Toogle>
          <Dropdown.Menu>
            <Dropdown.Item>Item 1</Dropdown.Item>
            <Dropdown.Item>Item 2</Dropdown.Item>
            <Dropdown.Item>Item 3</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    );
  },
};

Default.args = {
  className: '',
};

export const StyleToggle: Story = {
  render: function Render() {
    return (
      <div className="grid w-full h-96 place-content-center">
        <Dropdown {...Default.args}>
          <Dropdown.Toogle
            buttonProps={{
              variant: 'outline-primary',
              size: 'sm',
              block: true,
            }}
          >
            Selecciona
          </Dropdown.Toogle>
          <Dropdown.Menu>
            <Dropdown.Item>Item 1</Dropdown.Item>
            <Dropdown.Item>Item 2</Dropdown.Item>
            <Dropdown.Item>Item 3</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    );
  },
};

export const CustomToggle: Story = {
  render: function Render() {
    return (
      <div className="grid w-full h-96 place-content-center">
        <Dropdown {...Default.args}>
          <Dropdown.Toogle button={false}>
            <Avatar {...AvatarStorie.args} />
          </Dropdown.Toogle>
          <Dropdown.Menu>
            <Dropdown.Item>Item 1</Dropdown.Item>
            <Dropdown.Item>Item 2</Dropdown.Item>
            <Dropdown.Item>Item 3</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    );
  },
};

export const PositionTop: Story = {
  render: function Render() {
    return (
      <div className="grid w-full h-96 place-content-center">
        <Dropdown {...Default.args}>
          <Dropdown.Toogle>Selecciona</Dropdown.Toogle>
          <Dropdown.Menu position="top">
            <Dropdown.Item>Item 1</Dropdown.Item>
            <Dropdown.Item>Item 2</Dropdown.Item>
            <Dropdown.Item>Item 3</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    );
  },
};

export const AlignEnd: Story = {
  render: function Render() {
    return (
      <div className="grid w-full h-96 place-content-center">
        <Dropdown {...Default.args}>
          <Dropdown.Toogle>Selecciona</Dropdown.Toogle>
          <Dropdown.Menu position="top" align="end">
            <Dropdown.Item>Item 1</Dropdown.Item>
            <Dropdown.Item>Item 2</Dropdown.Item>
            <Dropdown.Item>Item 3</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    );
  },
};

export const AlignStart: Story = {
  render: function Render() {
    return (
      <div className="grid w-full h-96 place-content-center">
        <Dropdown {...Default.args}>
          <Dropdown.Toogle>Selecciona</Dropdown.Toogle>
          <Dropdown.Menu position="top" align="start">
            <Dropdown.Item>Item 1</Dropdown.Item>
            <Dropdown.Item>Item 2</Dropdown.Item>
            <Dropdown.Item>Item 3</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    );
  },
};

export const AlignCenter: Story = {
  render: function Render() {
    return (
      <div className="grid w-full h-96 place-content-center">
        <Dropdown {...Default.args}>
          <Dropdown.Toogle>Selecciona</Dropdown.Toogle>
          <Dropdown.Menu position="top" align="center">
            <Dropdown.Item>Item 1</Dropdown.Item>
            <Dropdown.Item>Item 2</Dropdown.Item>
            <Dropdown.Item>Item 3</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    );
  },
};

export const Divider: Story = {
  render: function Render() {
    return (
      <div className="grid w-full h-96 place-content-center">
        <Dropdown {...Default.args}>
          <Dropdown.Toogle>Selecciona</Dropdown.Toogle>
          <Dropdown.Menu position="top" align="center">
            <Dropdown.Item>Item 1</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Item 2</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Item 3</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    );
  },
};
