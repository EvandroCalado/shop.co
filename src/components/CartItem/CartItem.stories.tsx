import { Meta, StoryFn } from '@storybook/react';
import { CartItem, CartItemProps } from '.';

import mock from '../../mocks/cartItem.json';

export default {
  title: 'Components/CartItem',
  args: {
    cartItem: mock,
  },
  component: CartItem,
} as Meta;

export const Default: StoryFn<CartItemProps> = (args) => <CartItem {...args} />;
