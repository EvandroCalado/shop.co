import { getProductById } from '@/actions/products/getProductById';
import {
  BreadCrumb,
  Button,
  Colors,
  Heading,
  Layout,
  ProductGallery,
  ProductPrice,
  ProductTabs,
  Quantity,
  Sizes,
} from '@/components';
import { ProductType } from '@/types/productsType';

const ProductDetails = async ({ params }: { params: { id: string } }) => {
  const product: ProductType = await getProductById(params.id);
  const { images, price, discount, name, description, colors, sizes } =
    product.attributes;

  return (
    <Layout>
      <section className="px-6 py-6 md:px-16 lg:px-24">
        <BreadCrumb id={product.id} name={name} />

        <div className="flex flex-col justify-between gap-16 lg:flex-row">
          <ProductGallery images={images} />

          <div className="flex w-full flex-col justify-between gap-4">
            <Heading title={name} uppercase />
            <div>Rating</div>
            <ProductPrice price={price} discount={discount} />

            <p className="max-w-4xl text-zinc-400">{description}</p>

            <Colors colors={colors} />
            <Sizes sizes={sizes} />

            <div className="flex items-center gap-2">
              <Quantity />
              <Button className="w-full lg:w-64 xl:w-96">add to cart</Button>
            </div>
          </div>
        </div>

        <ProductTabs product={product} />
      </section>
    </Layout>
  );
};

export default ProductDetails;
