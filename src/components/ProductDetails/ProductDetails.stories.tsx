import { Meta, StoryFn } from '@storybook/react';
import { ProductDetails, ProductDetailsProps } from '.';

export default {
  title: 'Components/ProductDetails',
  component: ProductDetails,
  args: {
    details: 'Uma descrição para o produto',
  },
} as Meta;

export const Default: StoryFn<ProductDetailsProps> = (args) => (
  <ProductDetails {...args} />
);
