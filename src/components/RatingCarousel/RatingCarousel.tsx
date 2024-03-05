'use client';

import { MoveLeft, MoveRight } from 'lucide-react';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Heading, RatingCard } from '..';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export const RatingCarousel = () => {
  return (
    <section className="my-8 space-y-4 px-6 py-6 md:px-16 lg:px-24">
      <div className="flex items-center justify-between">
        <Heading title="our happy customers" uppercase />

        <div>
          <div className="relative mr-20">
            <MoveLeft className="swiper-button-prev" color="black" />
          </div>
          <div className="relative">
            <MoveRight className="swiper-button-next" color="black" />
          </div>
        </div>
      </div>

      <Swiper
        className="flex items-center gap-4"
        modules={[Navigation, Pagination]}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        loop
        spaceBetween={20}
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
        }}
      >
        <SwiperSlide>
          <RatingCard />
        </SwiperSlide>
        <SwiperSlide>
          <RatingCard />
        </SwiperSlide>
        <SwiperSlide>
          <RatingCard />
        </SwiperSlide>
        <SwiperSlide>
          <RatingCard />
        </SwiperSlide>
        <SwiperSlide>
          <RatingCard />
        </SwiperSlide>
        <SwiperSlide>
          <RatingCard />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};
