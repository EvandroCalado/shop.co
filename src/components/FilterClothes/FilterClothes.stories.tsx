import { Meta, StoryFn } from '@storybook/react';
import { FilterClothes, FilterClothesProps } from '.';

export default {
  title: 'Components/FilterClothes',
  component: FilterClothes,
  argTypes: {
    activeClothe: {
      options: ['t-shirts', 'shorts', 'shirts', 'hoodies', 'jeans'],
      control: { type: 'radio' },
    },
  },
} as Meta<typeof FilterClothes>;

export const Default: StoryFn<FilterClothesProps> = (args) => (
  <FilterClothes {...args} />
);
