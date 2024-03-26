import { CartItemProps } from '@/stores/cartStore';
import { FC } from 'react';
import { CartItem } from '..';

export interface CartListProps {
  cartItems: CartItemProps[];
}

export const CartList: FC<CartListProps> = ({ cartItems }) => {
  return (
    <div className="flex h-fit w-full flex-col gap-4 rounded-2xl border-[1px] border-[#f0f0f0] p-4 lg:flex-[2]">
      {cartItems.map((cartItem) => (
        <CartItem
          key={cartItem.product.id + cartItem.color + cartItem.size}
          cartItem={cartItem}
        />
      ))}
    </div>
  );
};
