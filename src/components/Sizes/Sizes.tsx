'use client';

import { useActive } from '@/hooks/useActive';
import { ProductType } from '@/types/productsType';
import { FC } from 'react';
import { Button } from '..';

export interface SizeProps {
  sizes: ProductType['attributes']['sizes'];
  title?: string;
}

export const Sizes: FC<SizeProps> = ({ sizes, title }) => {
  const { active, setActive } = useActive(sizes.data[0].attributes.name);

  return (
    <div>
      {title && <span className="capitalize text-zinc-400">{title}</span>}
      <div className="mt-2 flex flex-wrap items-center gap-2">
        {sizes.data.map((size) => (
          <Button
            type="button"
            key={size.id}
            variant="outline"
            className={`${active === size.attributes.name ? 'bg-black/95 text-white' : 'bg-[#f0f0f0]'} border-none px-4 py-2 outline-none hover:bg-black/95 hover:text-white`}
            onClick={() => setActive(size.attributes.name)}
          >
            {size.attributes.name}
          </Button>
        ))}
      </div>
    </div>
  );
};
