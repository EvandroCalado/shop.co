import { getAll } from '@/actions/products';
import {
  BrandsBar,
  BrowseBy,
  Hero,
  NewsLetter,
  ProductsCarousel,
  RatingCarousel,
} from '@/components';
import { ProductsType } from '@/types/productsType';

export default async function Home() {
  const products: ProductsType = await getAll();

  return (
    <>
      <Hero />
      <BrandsBar />
      <ProductsCarousel title="new arrivals" products={products} />
      <ProductsCarousel title="top selling" products={products} />
      <BrowseBy />
      <RatingCarousel />
      <NewsLetter />
    </>
  );
}
