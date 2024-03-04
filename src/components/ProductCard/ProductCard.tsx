import { Star, StarHalf } from 'lucide-react';
import Image from 'next/image';
import { Heading } from '..';
import { calcDiscount } from '../../utils/calcDiscount';

export const ProductCard = () => {
  return (
    <div className="flex flex-col gap-3">
      <div className="relative h-[350px] w-[360px] rounded-xl bg-[#f0f0f0]">
        <Image src="/temp/vector.png" alt="t-shit" fill />
      </div>

      <Heading
        title="t-shit with tape details"
        as="h5"
        className="capitalize"
      />

      <div className="flex items-center gap-2 text-sm">
        <Star size={20} />
        <Star size={20} />
        <Star size={20} />
        <Star size={20} />
        <StarHalf size={20} />
        <span>4.5/5</span>
      </div>

      <div className="flex items-center gap-2">
        <span className="text-4xl font-semibold">${calcDiscount(160, 20)}</span>
        <span className="text-4xl font-semibold text-zinc-400 line-through">
          $180
        </span>
        <span className="rounded-full bg-[#f0f0f0] px-3 py-1 text-[12px] text-red-500">
          -20%
        </span>
      </div>
    </div>
  );
};
