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
            <Table.Td>Rafael de Jesus Rebolledo Hernandex</Table.Td>
            <Table.Td>+52 747-133-38-71</Table.Td>
          </Table.Row>
          <Table.Row hover>
            <Table.Td>Rafael de Jesus Rebolledo Hernandex</Table.Td>
            <Table.Td>+52 747-133-38-71</Table.Td>
          </Table.Row>
        </Table.Body>
        <Table.Footer>
          <Table.Row>
            <Table.Td colSpan={2} className="py-5">
              Footer
            </Table.Td>
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
