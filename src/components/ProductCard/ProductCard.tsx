import { ProductType } from '@/types/productsType';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { Heading, ProductPrice, RatingItem } from '..';

export interface ProductCardProps {
  product: ProductType;
}

export const ProductCard: FC<ProductCardProps> = ({ product }) => {
  const { cover, name, price, discount, ratings } = product.attributes;
  return (
    <Link
      href={`/product/${product.id}`}
      className="group flex snap-start flex-col gap-3"
    >
      <div className="relative h-[350px] overflow-hidden rounded-xl bg-[#f0f0f0]">
        <Image
          src={cover.data.attributes.formats.small.url}
          alt={name}
          sizes="(100vw - 2rem) 350px, 360px"
          fill
          priority
          className="object-contain duration-300 group-hover:scale-110"
        />
      </div>

      <Heading title={name} as="h5" className="capitalize" />

      {ratings.data.length > 0 && <RatingItem ratings={ratings} />}

      <ProductPrice price={price} discount={discount} />
    </Link>
  );
};
