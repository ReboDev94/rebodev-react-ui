import type { Meta, StoryObj } from '@storybook/react';
import { twMerge } from 'tailwind-merge';
import {
  ALL_DEFAULT_VARIANTS,
  ALL_SIZES,
  POSITION_DIVIDER,
  POSITION_HORIZONTAL,
  SIZE_XS,
  VARIANT_PRIMARY,
} from '../constants';
import Divider from '.';

const meta = {
  title: 'GENERAL/Divider',
  component: Divider,
  tags: ['autodocs'],
  parameters: {
    controls: {
      exclude: ['children'],
    },
  },
  argTypes: {
    variant: {
      control: 'radio',
      options: ALL_DEFAULT_VARIANTS.filter(item => item !== 'light'),
    },
    size: {
      control: 'radio',
      options: ALL_SIZES,
    },
    position: {
      control: 'radio',
      options: POSITION_DIVIDER,
    },
    className: {
      control: 'text',
    },
  },
} satisfies Meta<typeof Divider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: function Render(args) {
    return (
      <div
        className={twMerge(
          'flex h-28 gap-2',
          args.position === 'horizontal' && 'flex-col h-auto',
        )}
      >
        <p className="flex-1">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores
          nostrum quae id incidunt aspernatur voluptas ullam facilis ab dolorum,
          pariatur, inventore cum expedita numquam consequatur, nemo recusandae
          veritatis neque voluptate.
        </p>
        <Divider {...args} />
        <p className="flex-1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo illo
          dolores iste dignissimos. Nobis sunt, distinctio voluptas quod nisi,
          dolore, officia quasi corrupti porro eum ratione. Dolorem molestiae a
          repellendus.
        </p>
      </div>
    );
  },
};

Default.args = {
  variant: VARIANT_PRIMARY,
  size: SIZE_XS,
  position: POSITION_HORIZONTAL,
  className: '',
};
