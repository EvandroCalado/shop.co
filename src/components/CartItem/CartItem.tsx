'use client';

import {
  CartItemProps as CartItemStoreProps,
  useCartStore,
} from '@/stores/cartStore';
import { calcDiscount } from '@/utils/calcDiscount';
import { Trash2 } from 'lucide-react';
import Image from 'next/image';
import { FC } from 'react';
import { Separator } from '..';

export interface CartItemProps {
  cartItem: CartItemStoreProps;
}

export const CartItem: FC<CartItemProps> = ({ cartItem }) => {
  const { removeFromCart, cartItems, increaseQuantity, decreaseQuantity } =
    useCartStore();

  const { cover, name } = cartItem.product.data.attributes;

  const currentCartItem = cartItems.filter((item) => item.id === cartItem.id);

  const currentAmount = currentCartItem
    .reduce(
      (total, item) =>
        total + item.quantity * item.product.data.attributes.price,
      0,
    )
    .toFixed(0);

  const currentAmountWithDiscount = currentCartItem
    .reduce(
      (total, item) =>
        total +
        item.quantity *
          calcDiscount(
            item.product.data.attributes.price,
            item.product.data.attributes.discount,
          ),
      0,
    )
    .toFixed(2);

  return (
    <>
      <div className="flex h-fit w-full justify-between rounded-2xl">
        <div className="flex gap-4">
          <div className="relative h-32 w-32 rounded-lg bg-[#f0f0f0]">
            <Image
              src={cover.data.attributes.formats.small.url}
              alt={name}
              fill
              priority
              sizes="(100vw - 2rem) 180px, 280px"
              className="object-contain"
            />
          </div>
          <div className="flex flex-col justify-between gap-1">
            <h3 className="text-lg font-semibold capitalize md:text-xl">
              {name}
            </h3>
            <div className="flex items-center gap-1 text-sm md:text-base">
              <span>Size:</span>
              <span className="capitalize text-zinc-400">{cartItem.size}</span>
            </div>
            <div className="flex items-center gap-1 text-sm md:text-base">
              <span>Color:</span>
              <span className="capitalize text-zinc-400">{cartItem.color}</span>
            </div>
            <div className="mt-2 flex items-center gap-2 text-xl font-bold md:text-xl">
              <span>${currentAmountWithDiscount}</span>
              <span className="text-zinc-400 line-through">
                ${currentAmount}
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-end justify-between">
          <Trash2
            color="red"
            className="h-8 w-8 cursor-pointer rounded-full p-2 duration-150 hover:bg-[#f0f0f0] md:h-10 md:w-10"
            onClick={() => removeFromCart(cartItem.id)}
          />

          <div className="flex items-center gap-2 overflow-hidden rounded-full bg-[#f0f0f0] text-base md:text-xl">
            <button
              className="flex-1 px-2 py-1 hover:bg-zinc-400/10 md:px-4 md:py-2"
              onClick={() => decreaseQuantity(cartItem.id)}
            >
              -
            </button>
            <span className="w-2 text-center md:w-6">
              {currentCartItem[0].quantity}
            </span>
            <button
              className="flex-1 px-2 py-1 hover:bg-zinc-400/10 md:px-4 md:py-2"
              onClick={() => increaseQuantity(cartItem.id)}
            >
              +
            </button>
          </div>
        </div>
      </div>
      <Separator />
    </>
  );
};
