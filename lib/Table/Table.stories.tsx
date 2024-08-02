import type { Meta, StoryObj } from '@storybook/react';
import Table from '.';

const meta: Meta<typeof Table> = {
  title: 'GENERAL/Table',
  component: Table,
  tags: ['autodocs'],
  argTypes: {
    className: {
      control: 'text',
    },
    wrapperClassName: {
      control: 'text',
    },
    wrapperStyle: {
      description: 'style css',
      control: false,
    },
  },
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof Table>;

export const Default: Story = {
  args: {},
  render: function Render(args) {
    return (
      <Table {...args}>
        <Table.Head>
          <>Name</>
          <>phone</>
        </Table.Head>
        <Table.Body divide>
          <Table.Row hover>
            <Table.Col>Rafael de Jesus Rebolledo Hernandex</Table.Col>
            <Table.Col>+52 747-133-38-71</Table.Col>
          </Table.Row>
          <Table.Row hover>
            <Table.Col>Rafael de Jesus Rebolledo Hernandex</Table.Col>
            <Table.Col>+52 747-133-38-71</Table.Col>
          </Table.Row>
        </Table.Body>
        <Table.Footer>
          <Table.Row>
            <Table.Col colSpan={2} className="py-5">
              Footer
            </Table.Col>
          </Table.Row>
        </Table.Footer>
      </Table>
    );
  },
};

Default.args = {
  className: '',
  wrapperClassName: '',
  wrapperStyle: {},
};
