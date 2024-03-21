'use client';

import { getAllColors } from '@/actions/colors/getAllColors';
import { getAllProducts } from '@/actions/products/getAllProducts';
import { getAllSizes } from '@/actions/sizes/getAllSizes';
import {
  BreadCrumb,
  Button,
  FilterClothes,
  FilterColors,
  FilterDressStyle,
  FilterPrice,
  FilterSizes,
  Heading,
  Layout,
  ProductCard,
  Separator,
} from '@/components';
import { useActiveColor } from '@/hooks/useActiveColor';
import { useActiveSize } from '@/hooks/useActiveSize';
import { ColorsType } from '@/types/colorsType';
import { ProductsType } from '@/types/productsType';
import { SizesType } from '@/types/sizesType';
import { SlidersHorizontal } from 'lucide-react';
import { useCallback, useEffect, useState } from 'react';

const Shop = () => {
  const [allColors, setAllColors] = useState<ColorsType>();
  const [allSizes, setAllSizes] = useState<SizesType>();
  const [allProducts, setAllProducts] = useState<ProductsType>();
  const { activeColor, setActiveColor } = useActiveColor('');
  const { activeSize, setActiveSize } = useActiveSize('');

  const getColors = useCallback(async () => {
    const colors = await getAllColors();
    setAllColors(colors);
  }, []);

  const getSizes = useCallback(async () => {
    const sizes = await getAllSizes();
    setAllSizes(sizes);
  }, []);

  const getProducts = useCallback(async () => {
    const products = await getAllProducts();
    setAllProducts(products);
  }, []);

  useEffect(() => {
    getColors();
    getSizes();
    getProducts();
  }, [getColors, getSizes, getProducts]);

  return (
    <Layout>
      <section className="mb-16 px-6 md:px-16 lg:px-24">
        <BreadCrumb />

        <div className="flex flex-col justify-between gap-8 md:flex-row">
          <form className="hidden h-fit w-[238px] rounded-xl border border-[#f0f0f0] px-4 py-2 md:block">
            <div className="flex w-full items-center justify-between">
              <Heading
                title="filters"
                as="h6"
                className="font-semibold capitalize"
              />
              <SlidersHorizontal />
            </div>

            <Separator />
            <FilterClothes />
            <Separator />
            <FilterPrice />
            <Separator />
            <FilterColors
              allColors={allColors}
              activeColor={activeColor}
              setActiveColor={setActiveColor}
            />
            <Separator />
            <FilterSizes
              allSizes={allSizes}
              activeSize={activeSize}
              setActiveSize={setActiveSize}
            />
            <Separator />
            <FilterDressStyle />

            <div className="my-4 text-center">
              <Button type="submit">apply filter</Button>
            </div>
          </form>

          <div className="flex-1">
            <div className="grid grid-cols-1 justify-end gap-16 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
              {allProducts?.data?.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Shop;
