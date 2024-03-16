import { calcDiscount } from '@/utils/calcDiscount';
import { FC } from 'react';

export interface ProductPriceProps {
  price: number;
  discount?: number;
}

export const ProductPrice: FC<ProductPriceProps> = ({ price, discount }) => {
  return (
    <div className="flex items-center gap-2">
      <span className="text-4xl font-semibold">
        ${discount ? calcDiscount(price, discount) : price}
      </span>
      <span className="text-4xl font-semibold text-zinc-400 line-through">
        ${price}
      </span>
      {discount && (
        <span className="rounded-full bg-[#f0f0f0] px-3 py-1 text-[12px] text-red-500">
          -{discount}%
        </span>
      )}
    </div>
  );
};
