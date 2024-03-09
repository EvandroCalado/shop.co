import {
  BrandsBar,
  BrowseBy,
  Hero,
  NewsLetter,
  ProductsCarousel,
  RatingCarousel,
} from '@/components';

export default function Home() {
  return (
    <>
      <Hero />
      <BrandsBar />
      <ProductsCarousel title="new arrivals" />
      <ProductsCarousel title="top selling" />
      <BrowseBy />
      <RatingCarousel />
      <NewsLetter />
    </>
  );
}
