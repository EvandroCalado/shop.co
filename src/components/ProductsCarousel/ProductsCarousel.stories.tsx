import { Meta, StoryFn } from '@storybook/react';
import { ProductsCarousel, ProductsCarouselProps } from '.';

export default {
  title: 'Components/ProductsCarousel',
  component: ProductsCarousel,
  args: {
    title: 'new arrivals',
  },
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const Default: StoryFn<ProductsCarouselProps> = (args) => (
  <ProductsCarousel {...args} />
);
