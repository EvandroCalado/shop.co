import { Meta, StoryFn } from '@storybook/react';
import { ProductsCarousel, ProductsCarouselProps } from '.';

import mock from '../../mocks/products.json';

export default {
  title: 'Components/ProductsCarousel',
  component: ProductsCarousel,
  args: {
    products: mock,
    title: 'new arrivals',
  },
  parameters: {
    nextjs: {
      appDirectory: true,
      navigation: {
        pathname: '/login',
      },
    },
  },
} as Meta;

export const Default: StoryFn<ProductsCarouselProps> = (args) => (
  <ProductsCarousel {...args} />
);
