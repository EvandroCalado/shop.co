'use client';

import { ColorsType } from '@/types/colorsType';
import { Check } from 'lucide-react';
import { FC } from 'react';

export interface ColorsProps {
  colors: ColorsType | undefined;
  title?: string;
  activeColor: string;
  setActiveColor: (color: string) => void;
}

export const Colors: FC<ColorsProps> = ({
  colors,
  title,
  activeColor,
  setActiveColor,
}) => {
  return (
    <div>
      {title && <span className="capitalize text-zinc-400">{title}</span>}
      <div className="mt-2 flex flex-wrap items-center gap-2">
        {colors?.data?.map((color) => (
          <button
            type="button"
            key={color.id}
            style={{ backgroundColor: color.attributes.color }}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-zinc-500"
            onClick={() => setActiveColor(color.attributes.slug)}
          >
            {activeColor === color.attributes.slug &&
            color.attributes.name === 'white' ? (
              <Check size={16} color="black" />
            ) : (
              activeColor === color.attributes.slug && (
                <Check size={16} color="white" />
              )
            )}
          </button>
        ))}
      </div>
    </div>
  );
};
