import { Meta, StoryFn } from '@storybook/react';
import { FilterDressStyle, FilterDressStyleProps } from '.';

export default {
  title: 'Components/FilterDressStyle',
  component: FilterDressStyle,
  argTypes: {
    activeDressStyle: {
      options: ['casual', 'formal', 'party', 'gym'],
      control: { type: 'radio' },
    },
  },
} as Meta<typeof FilterDressStyle>;

export const Default: StoryFn<FilterDressStyleProps> = (args) => (
  <FilterDressStyle {...args} />
);
