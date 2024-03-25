import { Meta, StoryFn } from '@storybook/react';
import { CartItem, CartItemProps } from '.';

export default {
  title: 'Components/CartItem',
  component: CartItem,
} as Meta;

export const Default: StoryFn<CartItemProps> = () => <CartItem />;
