'use client';

import { ProductsType } from '@/types/productsType';
import { MoveLeft, MoveRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { FC } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
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
  const router = useRouter();

  return (
    <section className={twMerge('my-8 space-y-8', className)}>
      <div className="flex items-center justify-between">
        <Heading title={title} uppercase />

        <div className="flex items-center gap-2">
          <div className="relative">
            <MoveLeft
              className={`prev${title.substring(0, 2)} h-8 w-8 cursor-pointer rounded-full p-1 duration-150 hover:bg-[#f0f0f0]`}
              color="black"
            />
          </div>
          <div className="relative">
            <MoveRight
              className={`next${title.substring(0, 2)} h-8 w-8 cursor-pointer rounded-full p-1 duration-150 hover:bg-[#f0f0f0]`}
              color="black"
            />
          </div>
        </div>
      </div>

      <Swiper
        className="flex items-center gap-16"
        modules={[Navigation, Pagination]}
        navigation={{
          nextEl: `.next${title.substring(0, 2)}`,
          prevEl: `.prev${title.substring(0, 2)}`,
        }}
        loop
        spaceBetween={40}
        breakpoints={{
          380: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
          1280: {
            slidesPerView: 4,
          },
        }}
      >
        {products.data.map((product) => (
          <SwiperSlide key={product.id}>
            <ProductCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>

      {showButton && (
        <div className="w-full text-center">
          <Button variant="outline" onClick={() => router.push('/shop')}>
            view all
          </Button>
        </div>
      )}
    </section>
  );
};
