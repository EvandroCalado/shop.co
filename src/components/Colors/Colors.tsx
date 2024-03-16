'use client';

import { ProductType } from '@/types/productsType';
import { Check } from 'lucide-react';
import { FC, useState } from 'react';

export interface ColorsProps {
  colors: ProductType['attributes']['colors'];
}

export const Colors: FC<ColorsProps> = ({ colors }) => {
  const [active, setActive] = useState(colors.data[0].attributes.name);

  return (
    <div>
      <span className="text-zinc-400">Select Colors:</span>
      <div className="mt-2 flex items-center gap-2">
        {colors.data.map((color) => (
          <button
            key={color.id}
            style={{ backgroundColor: color.attributes.color }}
            className="flex h-8 w-8 items-center justify-center rounded-full"
            onClick={() => setActive(color.attributes.name)}
          >
            {active === color.attributes.name && (
              <Check size={16} color="white" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};
