'use client';

import { FC } from 'react';
import { Heading } from '..';

export interface FilterPriceProps {
  activePrice: number;
  setActivePrice: (price: number) => void;
}

export const FilterPrice: FC<FilterPriceProps> = ({
  activePrice,
  setActivePrice,
}) => {
  const maxPrice = 1000;

  return (
    <>
      <Heading title="price" as="h6" className="font-semibold capitalize" />

      <input
        type="range"
        min={0}
        max={maxPrice}
        step={1}
        value={activePrice}
        onChange={(e) => setActivePrice(Number(e.target.value))}
        className="mt-4 w-full accent-black/95"
      />

      <div className="mb-4 flex items-center justify-between text-[12px] font-semibold">
        <span>${activePrice}</span>
        <span>$1000</span>
      </div>
    </>
  );
};
