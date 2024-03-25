'use client';

import { Trash2 } from 'lucide-react';
import Image from 'next/image';
import { FC, useState } from 'react';
import { Quantity, Separator } from '..';

export interface CartItemProps {
  className?: string;
}

export const CartItem: FC<CartItemProps> = () => {
  const [quantity, setQuantity] = useState(1);

  return (
    <>
      <div className="flex h-fit w-full justify-between rounded-2xl">
        <div className="flex gap-4">
          <div className="relative h-32 w-32 rounded-lg bg-[#f0f0f0]">
            <Image
              src="/temp/vector.png"
              alt="vector"
              fill
              priority
              sizes="(100vw - 2rem) 180px, 280px"
              className="object-contain"
            />
          </div>
          <div className="flex flex-col justify-between gap-1">
            <h3 className="text-lg font-semibold capitalize md:text-xl">
              black t-shirt
            </h3>
            <div className="flex items-center gap-1 text-sm md:text-base">
              <span>Size:</span>
              <span className="capitalize text-zinc-400">large</span>
            </div>
            <div className="flex items-center gap-1 text-sm md:text-base">
              <span>Color:</span>
              <span className="capitalize text-zinc-400">white</span>
            </div>
            <span className="mt-2 text-xl font-bold md:text-2xl">$145</span>
          </div>
        </div>

        <div className="flex flex-col items-end justify-between">
          <Trash2 color="red" className="w-5 md:w-6" />
          <Quantity activeQuantity={quantity} setActiveQuantity={setQuantity} />
        </div>
      </div>
      <Separator />
    </>
  );
};
