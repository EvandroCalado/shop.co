'use client';

import { getProductById, getProductsByCategory } from '@/actions';
import {
  BreadCrumb,
  Button,
  Colors,
  Heading,
  Layout,
  ProductGallery,
  ProductPrice,
  ProductTabs,
  ProductsCarousel,
  Quantity,
  RatingItem,
  Sizes,
} from '@/components';
import { useCartStore } from '@/stores/cartStore';
import { ProductType, ProductsType } from '@/types';
import { calcDiscount } from '@/utils/calcDiscount';
import { useParams } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';

const ProductDetails = () => {
  const [product, setProduct] = useState<ProductType>();
  const [productsByCategories, setProductsByCategories] =
    useState<ProductsType>();
  const [activeColor, setActiveColor] = useState('');
  const [activeSize, setActiveSize] = useState('');
  const [activeQuantity, setActiveQuantity] = useState(1);
  const [colorError, setColorError] = useState('');
  const [sizeError, setSizeError] = useState('');
  const addToCart = useCartStore((state) => state.addToCart);

  const param = useParams();

  const getProduct = useCallback(async () => {
    const product = await getProductById(param.id as string);
    const productsByCategories = await getProductsByCategory(
      product?.attributes.categories.data[0].attributes.slug,
    );
    setProduct(product);
    setProductsByCategories(productsByCategories);
  }, [param]);

  useEffect(() => {
    getProduct();
  }, [getProduct]);

  if (!product) return null;
  if (!productsByCategories) return null;

  const { images, price, discount, name, description, colors, sizes, ratings } =
    product?.attributes || {};

  const handleAddToCart = () => {
    if (activeColor === '') {
      setColorError('Please select a color');
      return;
    }

    if (activeSize === '') {
      setSizeError('Please select a size');
      return;
    }

    addToCart({
      id: product.id + activeColor + activeSize,
      product,
      color: activeColor,
      size: activeSize,
      quantity: activeQuantity,
      amount: calcDiscount(price, discount) * activeQuantity,
    });
  };

  return (
    <Layout>
      <section className="px-6 py-6 md:px-16 lg:px-24">
        <BreadCrumb id={product.id} name={name} />

        <div className="flex flex-col justify-between gap-16 lg:flex-row">
          <ProductGallery images={images} />

          <div className="flex w-full flex-col justify-between gap-4">
            <Heading title={name} uppercase />

            {ratings.data.length > 0 && <RatingItem ratings={ratings} />}

            <ProductPrice price={price} discount={discount} />

            <p className="max-w-4xl text-zinc-400">{description}</p>

            <Colors
              colors={colors}
              title="choose color:"
              activeColor={activeColor}
              setActiveColor={setActiveColor}
            />
            {activeColor === '' && <p className="text-red-500">{colorError}</p>}
            <Sizes
              sizes={sizes}
              title="choose size:"
              activeSize={activeSize}
              setActiveSize={setActiveSize}
            />
            {activeSize === '' && <p className="text-red-500">{sizeError}</p>}

            <div className="flex items-center gap-2">
              <Quantity
                activeQuantity={activeQuantity}
                setActiveQuantity={setActiveQuantity}
              />
              <Button
                className="w-full lg:w-64 xl:w-96"
                onClick={handleAddToCart}
              >
                add to cart
              </Button>
            </div>
          </div>
        </div>

        <ProductTabs product={product} />

        <ProductsCarousel
          title="you might also like"
          products={productsByCategories}
          showButton={false}
        />
      </section>
    </Layout>
  );
};

export default ProductDetails;
