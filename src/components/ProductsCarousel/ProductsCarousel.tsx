import { FC } from 'react';
import { Button, Heading, ProductCard } from '..';

export interface ProductsCarouselProps {
  title: string;
}

export const ProductsCarousel: FC<ProductsCarouselProps> = ({ title }) => {
  return (
    <section className="space-y-8 px-6 py-6 md:px-16 lg:px-24">
      <Heading title={title} uppercase className="text-center" />

      <div className="flex w-full snap-x items-center justify-between gap-8 sm:snap-none">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>

      <div className="w-full text-center">
        <Button variant="outline">view all</Button>
      </div>
    </section>
  );
};
