import { ProductsType } from '@/types/productsType';
import { FC } from 'react';
import { twMerge } from 'tailwind-merge';
import { Button, Heading, ProductCard } from '..';

export interface ProductsCarouselProps {
  products: ProductsType;
  title: string;
  showButton?: boolean;
  className?: string;
}

export const ProductsCarousel: FC<ProductsCarouselProps> = ({
  products,
  title,
  showButton = true,
  className,
}) => {
  return (
    <section className={twMerge('my-8 space-y-8', className)}>
      <Heading title={title} uppercase className="text-center" />

      <div className="flex w-full snap-mandatory items-center justify-between gap-8 overflow-y-hidden overflow-x-scroll scrollbar-hide">
        {products.data.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {showButton && (
        <div className="w-full text-center">
          <Button variant="outline">view all</Button>
        </div>
      )}
    </section>
  );
};
