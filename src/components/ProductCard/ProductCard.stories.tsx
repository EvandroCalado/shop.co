import { StoryFn } from '@storybook/react';
import { ProductCard, ProductCardProps } from '.';

import mock from '../../mocks/products.json';

export default {
  title: 'Components/ProductCard',
  args: {
    product: mock.data[0],
  },
  component: ProductCard,
};

export const Default: StoryFn<ProductCardProps> = (args) => (
  <ProductCard {...args} />
);
