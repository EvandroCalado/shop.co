'use client';

import { useActive } from '@/hooks/useActive';
import { ProductType } from '@/types/productsType';
import { Check } from 'lucide-react';
import { FC } from 'react';

export interface ColorsProps {
  colors: ProductType['attributes']['colors'];
  title?: string;
}

export const Colors: FC<ColorsProps> = ({ colors, title }) => {
  const { active, setActive } = useActive(colors.data[0].attributes.name);

  return (
    <div>
      {title && <span className="capitalize text-zinc-400">{title}</span>}
      <div className="mt-2 flex flex-wrap items-center gap-2">
        {colors.data.map((color) => (
          <button
            key={color.id}
            style={{ backgroundColor: color.attributes.color }}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-zinc-500"
            onClick={() => setActive(color.attributes.name)}
          >
            {active === color.attributes.name &&
            color.attributes.name === 'white' ? (
              <Check size={16} color="black" />
            ) : (
              active === color.attributes.name && (
                <Check size={16} color="white" />
              )
            )}
          </button>
        ))}
      </div>
    </div>
  );
};
