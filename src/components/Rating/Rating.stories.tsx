import { Meta, StoryFn } from '@storybook/react';
import { Rating, RatingProps } from '.';

import mock from '../../mocks/products.json';

export default {
  title: 'Components/Rating',
  component: Rating,
  args: {
    ratings: mock.data[0].attributes.ratings,
  },
} as Meta;

export const Default: StoryFn<RatingProps> = (args) => <Rating {...args} />;
