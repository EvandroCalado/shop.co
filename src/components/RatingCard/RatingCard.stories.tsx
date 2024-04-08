import { StoryFn } from '@storybook/react';
import { RatingCard, RatingCardProps } from '.';

import mock from '../../mocks/products.json';

export default {
  title: 'Components/RatingCard',
  component: RatingCard,
  args: {
    rating: mock.data[0].attributes.ratings.data[0],
  },
};

export const Default: StoryFn<RatingCardProps> = (args) => (
  <RatingCard {...args} />
);
