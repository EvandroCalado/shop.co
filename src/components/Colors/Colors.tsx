import { ProductType } from '@/types/productsType';
import { FC } from 'react';

export interface ColorsProps {
  colors: ProductType['attributes']['colors'];
}

export const Colors: FC<ColorsProps> = ({ colors }) => {
  return (
    <div>
      <span className="text-zinc-400">Select Colors:</span>
      <div className="mt-2 flex items-center gap-2">
        {colors.data.map((color) => (
          <div
            key={color.id}
            style={{ backgroundColor: color.attributes.color }}
            className="h-8 w-8 rounded-full"
          ></div>
        ))}
      </div>
    </div>
  );
};
