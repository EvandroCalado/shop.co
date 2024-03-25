'use client';

import { FC } from 'react';

export interface QuantityProps {
  activeQuantity: number;
  setActiveQuantity: (quantity: number) => void;
}

export const Quantity: FC<QuantityProps> = ({
  activeQuantity,
  setActiveQuantity,
}) => {
  if (activeQuantity < 1) {
    setActiveQuantity(1);
  }

  return (
    <div>
      <div className="flex items-center gap-2 overflow-hidden rounded-full bg-[#f0f0f0] text-xl">
        <button
          className="flex-1 px-4 py-2 hover:bg-zinc-400/10"
          onClick={() => setActiveQuantity(activeQuantity - 1)}
        >
          -
        </button>
        <span className="w-6 text-center">{activeQuantity}</span>
        <button
          className="flex-1 px-4 py-2 hover:bg-zinc-400/10"
          onClick={() => setActiveQuantity(activeQuantity + 1)}
        >
          +
        </button>
      </div>
    </div>
  );
};
