import { Meta, StoryFn } from '@storybook/react';
import { ProductTabs, ProductTabsProps } from '.';

import mock from '../../mocks/products.json';

export default {
  title: 'Components/ProductTabs',
  component: ProductTabs,
  args: {
    product: mock.data[0],
  },
} as Meta;

export const Default: StoryFn<ProductTabsProps> = (args) => (
  <ProductTabs {...args} />
);
