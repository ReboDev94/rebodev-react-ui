import type { Meta, StoryObj } from '@storybook/react';
import Divider, { IDivider } from '.';
import {
  ALL_SIZES,
  POSITION_HORIZONTAL,
  SIZE_XS,
  VARIANT_BASE,
} from '../constants';
import { POSITION_DIVIDER, VARIANTS_DIVIDER } from './interfaces';
import { twMerge } from 'tailwind-merge';

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
      options: VARIANTS_DIVIDER,
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

const DEFAULT_ARGS: Partial<IDivider> = {
  variant: VARIANT_BASE,
  size: SIZE_XS,
  position: POSITION_HORIZONTAL,
  className: '',
};

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

Default.args = DEFAULT_ARGS;
