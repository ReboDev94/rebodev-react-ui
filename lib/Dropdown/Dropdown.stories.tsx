import type { Meta, StoryObj } from '@storybook/react';
import { SIZE_SM } from '../constants';
import { buttonToogle } from './interfaces';
import Dropdown from '.';
import Avatar from '../Avatar';
import Divider from '../Divider';
import { Default as AvatarStorie } from '../Avatar/Avatar.stories';
import { Default as DividerStorie } from '../Divider/Divider.stories';

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

const buttonProps: buttonToogle = {
  variant: 'primary',
  size: SIZE_SM,
  block: false,
  className: '',
};

export const Default: Story = {
  render: function Render(args) {
    return (
      <div className="grid w-full h-96 place-content-center">
        <Dropdown {...args}>
          <Dropdown.Toogle button buttonProps={{ ...buttonProps }}>
            DropDown
          </Dropdown.Toogle>
          <Dropdown.Menu position="bottom" align="center">
            <Dropdown.Item
              className=""
              onClick={() => {
                alert('click item');
              }}
              disabled
            >
              Item 1
            </Dropdown.Item>
            <Divider {...DividerStorie.args} />
            <Dropdown.Item
              onClick={() => {
                alert('click item 2');
              }}
            >
              Item 2
            </Dropdown.Item>
            <Divider {...DividerStorie.args} />
            <Dropdown.Item
              onClick={() => {
                alert('click item 3');
              }}
            >
              Item 3
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    );
  },
};

Default.args = {
  className: '',
};

export const DisabledToggle: Story = {
  render: function Render() {
    return (
      <div className="grid w-full h-96 place-content-center">
        <Dropdown {...Default.args}>
          <Dropdown.Toogle button disabled buttonProps={{ ...buttonProps }}>
            DropDown
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
          <Dropdown.Toogle>Button</Dropdown.Toogle>
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

export const PositionLeft: Story = {
  render: function Render() {
    return (
      <div className="grid w-full h-96 place-content-center">
        <Dropdown {...Default.args}>
          <Dropdown.Toogle>Button</Dropdown.Toogle>
          <Dropdown.Menu position="left">
            <Dropdown.Item>Item 1</Dropdown.Item>
            <Dropdown.Item>Item 2</Dropdown.Item>
            <Dropdown.Item>Item 3</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    );
  },
};

export const PositionRight: Story = {
  render: function Render() {
    return (
      <div className="grid w-full h-96 place-content-center">
        <Dropdown {...Default.args}>
          <Dropdown.Toogle>Button</Dropdown.Toogle>
          <Dropdown.Menu position="right">
            <Dropdown.Item>Item 1</Dropdown.Item>
            <Dropdown.Item>Item 2</Dropdown.Item>
            <Dropdown.Item>Item 3</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    );
  },
};

export const AlingStart: Story = {
  render: function Render() {
    return (
      <div className="grid w-full h-96 place-content-center">
        <Dropdown {...Default.args}>
          <Dropdown.Toogle>Button</Dropdown.Toogle>
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

export const AlingCenter: Story = {
  render: function Render() {
    return (
      <div className="grid w-full h-96 place-content-center">
        <Dropdown {...Default.args}>
          <Dropdown.Toogle>Button</Dropdown.Toogle>
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

export const AlingEnd: Story = {
  render: function Render() {
    return (
      <div className="grid w-full h-96 place-content-center">
        <Dropdown {...Default.args}>
          <Dropdown.Toogle>Button</Dropdown.Toogle>
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
