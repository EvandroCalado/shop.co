import { ProductType } from '@/types/productsType';
import { FC } from 'react';
import { Button } from '..';

export interface SizeProps {
  sizes: ProductType['attributes']['sizes'];
}

export const Sizes: FC<SizeProps> = ({ sizes }) => {
  return (
    <div>
      <span className="text-zinc-400">Choose Size:</span>
      <div className="mt-2 flex items-center gap-2">
        {sizes.data.map((size) => (
          <Button
            key={size.id}
            variant="outline"
            className="border-none bg-[#f0f0f0] px-4 py-2 outline-none hover:bg-black/95 hover:text-white"
          >
            {size.attributes.name}
          </Button>
        ))}
      </div>
    </div>
  );
};
