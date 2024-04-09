import { Meta, StoryFn } from '@storybook/react';
import { RatingItem, RatingItemProps } from '.';

import mock from '../../mocks/products.json';

export default {
  title: 'Components/RatingItem',
  component: RatingItem,
  args: {
    ratings: mock.data[0].attributes.ratings,
  },
} as Meta;

export const Default: StoryFn<RatingItemProps> = (args) => (
  <RatingItem {...args} />
);
