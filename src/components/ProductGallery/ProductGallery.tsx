'use client';

import { FC, useState } from 'react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import { ProductType } from '@/types/productsType';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

export interface ProductGalleryProps {
  images: ProductType['attributes']['images'];
}

export const ProductGallery: FC<ProductGalleryProps> = ({ images }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="max-w-[350px]">
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        spaceBetween={10}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {images.data.map((image) => (
          <SwiperSlide key={image.id}>
            <div className="relative mb-4 h-[350px] w-[350px] rounded-2xl bg-[#f0f0f0]">
              <Image
                src={image.attributes.url}
                alt={image.attributes.name}
                fill
                priority
                sizes="(300px, 300px)"
                className="object-contain"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={3}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper justify-between"
      >
        {images.data.map((image) => (
          <SwiperSlide key={image.id} className="ml-1 cursor-pointer">
            <div className="relative h-[100px] w-[100px] rounded-2xl bg-[#f0f0f0]">
              <Image
                src={image.attributes.formats.thumbnail.url}
                alt={image.attributes.name}
                fill
                priority
                sizes="(100px, 100px)"
                className="object-contain"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
