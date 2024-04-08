import { Meta, StoryFn } from '@storybook/react';
import { CartItem, CartItemProps } from '.';

import mock from '../../mocks/products.json';

export default {
  title: 'Components/CartItem',
  component: CartItem,
  args: {
    cartItem: {
      id: 'test',
      product: mock.data[0],
      color: 'red',
      quantity: 1,
      amount: 100,
    },
  },
} as Meta;

export const Default: StoryFn<CartItemProps> = (args) => <CartItem {...args} />;
