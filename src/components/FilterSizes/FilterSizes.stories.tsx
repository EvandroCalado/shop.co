import { Meta, StoryFn } from '@storybook/react';
import { FilterSizes, FilterSizesProps } from '.';

export default {
  title: 'Components/FilterSizes',
  component: FilterSizes,
  args: {
    allSizes: {
      data: [
        {
          id: 1,
          attributes: {
            name: 'small',
            slug: 'small',
          },
        },
        {
          id: 2,
          attributes: {
            name: 'medium',
            slug: 'medium',
          },
        },
        {
          id: 1,
          attributes: {
            name: 'large',
            slug: 'large',
          },
        },
      ],
    },
  },
} as Meta;

export const Default: StoryFn<FilterSizesProps> = (args) => (
  <FilterSizes {...args} />
);
