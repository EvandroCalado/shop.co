import { Meta, StoryFn } from '@storybook/react';
import { FilterPrice, FilterPriceProps } from '.';

export default {
  title: 'Components/FilterPrice',
  component: FilterPrice,
  argTypes: {
    activePrice: {
      control: {
        type: 'range',
        min: 0,
        max: 1000,
      },
    },
  },
} as Meta<typeof FilterPrice>;

export const Default: StoryFn<FilterPriceProps> = (args) => (
  <FilterPrice {...args} />
);
