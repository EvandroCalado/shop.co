import { getByTagSlug } from '@/actions/products';
import { getByDressStyle } from '@/actions/products/getByDressStyle';
import {
  BrandsBar,
  BrowseBy,
  Hero,
  Layout,
  NewsLetter,
  ProductsCarousel,
  RatingCarousel,
} from '@/components';
import { ProductsType } from '@/types/productsType';
import toast from 'react-hot-toast';

export default async function Home() {
  const productsByDressStyle = await getByDressStyle();
  const promises = [getByTagSlug('new-arrivals'), getByTagSlug('on-sale')];

  const resolve = Promise.allSettled(promises)
    .then((results) => {
      return results.map(
        (results) => results.status === 'fulfilled' && results.value,
      );
    })
    .catch((error) => {
      toast.error(error.message);
      throw new Error(error);
    });

  return (
    <Layout>
      <Hero />
      <BrandsBar />

      {(await resolve).map((products: ProductsType) => (
        <ProductsCarousel
          key={products.data[0].id}
          title={products.data[0].attributes.tag.data.attributes.name}
          products={products}
        />
      ))}

      <BrowseBy productsByDressStyle={productsByDressStyle} />
      <RatingCarousel />
      <NewsLetter />
    </Layout>
  );
}
