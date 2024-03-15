import { ProductsType } from '@/types/productsType';
import { FC } from 'react';
import { Button, Heading, ProductCard } from '..';

export interface ProductsCarouselProps {
  products: ProductsType;
  title: string;
}

export const ProductsCarousel: FC<ProductsCarouselProps> = ({
  products,
  title,
}) => {
  return (
    <section className="my-8 space-y-8 px-6 py-6 md:px-16 lg:px-24">
      <Heading title={title} uppercase className="text-center" />

      <div className="flex w-full snap-mandatory items-center justify-between gap-8 overflow-y-hidden overflow-x-scroll scrollbar-hide">
        {products.data.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="w-full text-center">
        <Button variant="outline">view all</Button>
      </div>
    </section>
  );
};
