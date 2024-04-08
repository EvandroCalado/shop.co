import { StoryFn } from '@storybook/react';
import { RatingCarousel, RatingCarouselProps } from '.';

import mock from '../../mocks/products.json';

export default {
  title: 'Components/RatingCarousel',
  component: RatingCarousel,
  args: {
    ratings: mock.data[0].attributes.ratings,
  },
};

export const Default: StoryFn<RatingCarouselProps> = (args) => (
  <RatingCarousel {...args} />
);
