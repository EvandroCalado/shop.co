import { ProductType } from '@/types/productsType';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { Heading, ProductPrice, RatingItem } from '..';

export interface ProductCardProps {
  product: ProductType;
}

export const ProductCard: FC<ProductCardProps> = ({ product }) => {
  const { cover, name, price, discount } = product.attributes;

  return (
    <Link
      href={`/product/${product.id}`}
      className="group flex snap-start flex-col gap-3 [&>div>img]:duration-300"
    >
      <div className="relative h-[350px] w-[360px] overflow-hidden rounded-xl bg-[#f0f0f0]">
        <Image
          src={cover.data.attributes.formats.small.url}
          alt={name}
          fill
          className="object-contain group-hover:scale-110"
        />
      </div>

      <Heading title={name} as="h5" className="capitalize" />

      <RatingItem />

      <ProductPrice price={price} discount={discount} />
    </Link>
  );
};
