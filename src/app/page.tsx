import { getProductsByDressStyle } from '@/actions/products/getProductsByDressStyle';
import { getProductsByTagSlug } from '@/actions/products/getProductsByTagSlug';
import { getAll } from '@/actions/ratings/getAll';
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
  const promises = [
    getProductsByTagSlug('new-arrivals'),
    getProductsByTagSlug('on-sale'),
  ];

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
  const productsByDressStyle = await getProductsByDressStyle();
  const ratings = await getAll();

  return (
    <Layout>
      <Hero />
      <BrandsBar />

      {(await resolve).map((products: ProductsType) => (
        <ProductsCarousel
          key={products.data[0].id}
          title={products.data[0].attributes.tag.data.attributes.name}
          products={products}
          className="px-6 md:px-16 lg:px-24"
        />
      ))}

      <BrowseBy productsByDressStyle={productsByDressStyle} />
      <RatingCarousel ratings={ratings} />
      <NewsLetter />
    </Layout>
  );
}
