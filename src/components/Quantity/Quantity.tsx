'use client';

import { useState } from 'react';

export const Quantity = () => {
  const [count, setCount] = useState(1);

  if (count < 1) {
    setCount(1);
  }

  return (
    <div>
      <div className="flex items-center gap-2 overflow-hidden rounded-full bg-[#f0f0f0] text-xl">
        <button
          className="flex-1 px-4 py-2 hover:bg-zinc-400/10"
          onClick={() => setCount(count - 1)}
        >
          -
        </button>
        <span className="w-6 text-center">{count}</span>
        <button
          className="flex-1 px-4 py-2 hover:bg-zinc-400/10"
          onClick={() => setCount(count + 1)}
        >
          +
        </button>
      </div>
    </div>
  );
};
