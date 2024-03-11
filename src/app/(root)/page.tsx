import { getByTagSlug } from '@/actions/products';
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
  const promises = [getByTagSlug('new-arrivals'), getByTagSlug('on-sale')];

  const resolve = Promise.allSettled(promises)
    .then((results) => {
      return results.map(
        (results) => results.status === 'fulfilled' && results.value,
      );
    })
    .catch((error) => {
      throw new Error(error);
    });

  return (
    <>
      <Hero />
      <BrandsBar />

      {(await resolve).map((products: ProductsType) => (
        <ProductsCarousel
          key={products.data[0].id}
          title={products.data[0].attributes.tag.data.attributes.name}
          products={products}
        />
      ))}

      <BrowseBy />
      <RatingCarousel />
      <NewsLetter />
    </>
  );
}
