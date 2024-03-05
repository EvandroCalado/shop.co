import {
  BrandsBar,
  BrowseBy,
  Footer,
  Header,
  Hero,
  NewsLetter,
  ProductsCarousel,
  RatingCarousel,
} from '@/components';

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <BrandsBar />
      <ProductsCarousel title="new arrivals" />
      <ProductsCarousel title="top selling" />
      <BrowseBy />
      <RatingCarousel />
      <NewsLetter />
      <Footer />
    </>
  );
}
