import { Meta, StoryFn } from '@storybook/react';
import { ProductsList, ProductsListProps } from '.';

import mock from '../../mocks/products.json';

export default {
  title: 'Components/ProductsList',
  component: ProductsList,
  args: {
    allProducts: mock,
  },
} as Meta;

export const Default: StoryFn<ProductsListProps> = (args) => (
  <ProductsList {...args} />
);
