import { ProductType } from '@/types/productsType';
import { calcDiscount } from '@/utils/calcDiscount';
import { Star, StarHalf } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { Heading } from '..';

export interface ProductCardProps {
  product: ProductType;
}

export const ProductCard: FC<ProductCardProps> = ({ product }) => {
  const { cover, name, price, discount } = product.attributes;

  return (
    <Link
      href={`/product/${product.attributes.slug}`}
      className="flex snap-start flex-col gap-3 [&>div>img]:duration-300 hover:[&>div>img]:scale-110"
    >
      <div className="relative h-[350px] w-[360px] overflow-hidden rounded-xl bg-[#f0f0f0]">
        <Image
          src={cover.data.attributes.formats.small.url}
          alt={name}
          fill
          className="object-contain"
        />
      </div>

      <Heading title={name} as="h5" className="capitalize" />

      <div className="flex items-center gap-2 text-sm">
        <Star size={20} />
        <Star size={20} />
        <Star size={20} />
        <Star size={20} />
        <StarHalf size={20} />
        <span>4.5/5</span>
      </div>

      <div className="flex items-center gap-2">
        <span className="text-4xl font-semibold">
          ${calcDiscount(price, discount)}
        </span>
        <span className="text-4xl font-semibold text-zinc-400 line-through">
          ${price}
        </span>
        <span className="rounded-full bg-[#f0f0f0] px-3 py-1 text-[12px] text-red-500">
          -{discount}%
        </span>
      </div>
    </Link>
  );
};
