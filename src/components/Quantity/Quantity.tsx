'use client';

import { FC } from 'react';

export interface QuantityProps {
  activeQuantity: number;
  setActiveQuantity: (quantity: number) => void;
  isSmall?: boolean;
}

export const Quantity: FC<QuantityProps> = ({
  activeQuantity,
  setActiveQuantity,
}) => {
  if (activeQuantity < 1) {
    setActiveQuantity(1);
  }

  return (
    <div className="flex items-center gap-2 overflow-hidden rounded-full bg-[#f0f0f0] text-base md:text-xl">
      <button
        className="flex-1 px-2 py-1 hover:bg-zinc-400/10 md:px-4 md:py-2"
        onClick={() => setActiveQuantity(activeQuantity - 1)}
      >
        -
      </button>
      <span className="w-2 text-center md:w-6">{activeQuantity}</span>
      <button
        className="flex-1 px-2 py-1 hover:bg-zinc-400/10 md:px-4 md:py-2"
        onClick={() => setActiveQuantity(activeQuantity + 1)}
      >
        +
      </button>
    </div>
  );
};
