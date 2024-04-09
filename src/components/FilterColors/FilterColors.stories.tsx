import { Meta, StoryFn } from '@storybook/react';
import { FilterColors, FilterColorsProps } from '.';

export default {
  title: 'Components/FilterColors',
  args: {
    allColors: {
      data: [
        {
          id: 1,
          attributes: {
            name: 'black',
            slug: 'black',
            color: '#000000',
          },
        },
        {
          id: 2,
          attributes: {
            name: 'red',
            slug: 'red',
            color: '#ff0000',
          },
        },
        {
          id: 1,
          attributes: {
            name: 'blue',
            slug: 'blue',
            color: '#0000ff',
          },
        },
      ],
    },
  },
  component: FilterColors,
} as Meta<typeof FilterColors>;

export const Default: StoryFn<FilterColorsProps> = (args) => (
  <FilterColors {...args} />
);
