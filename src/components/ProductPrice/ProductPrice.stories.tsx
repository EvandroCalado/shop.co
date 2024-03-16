import { Meta, StoryFn } from '@storybook/react';
import { ProductPrice, ProductPriceProps } from '.';

export default {
  title: 'Components/ProductPrice',
  component: ProductPrice,
  args: {
    price: 100,
    discount: 10,
  },
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const Default: StoryFn<ProductPriceProps> = (args) => (
  <ProductPrice {...args} />
);
