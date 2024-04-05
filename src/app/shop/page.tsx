'use client';

import { getAllProducts } from '@/actions';
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
  Pagination,
  ProductsList,
  Separator,
} from '@/components';
import { useFilters } from '@/hooks';
import { SlidersHorizontal, X } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';

const Shop = () => {
  const query = useSearchParams();
  const router = useRouter();
  const activeName = query.get('q') || '';

  const {
    activeClothe,
    activeColor,
    activeDressStyle,
    activePrice,
    activeSize,
    allColors,
    allProducts,
    allSizes,
    setAllProducts,
    setActiveClothe,
    setActiveColor,
    setActiveDressStyle,
    setActivePrice,
    setActiveSize,
    getProducts,
  } = useFilters({ activeName });

  const [showFilters, setShowFilters] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const { page, pageCount } = allProducts
    ? allProducts.meta.pagination
    : { page: 0, pageCount: 0 };

  const priceToString = () => {
    if (activePrice === 0) return '';

    return activePrice.toFixed().toString();
  };

  const allProductsRequest = async (page = currentPage) => {
    const products = await getAllProducts(
      activeName || '',
      activeClothe,
      priceToString(),
      activeColor,
      activeSize,
      activeDressStyle,
      page,
    );

    setAllProducts(products);
  };

  const handleOnSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    allProductsRequest();
    setShowFilters(false);
  };

  const handleOnReset = () => {
    setActiveClothe('');
    setActivePrice(0);
    setActiveColor('');
    setActiveSize('');
    setActiveDressStyle('');
    setCurrentPage(1);
    getProducts();
    router.push('/shop?q=');

    setShowFilters(false);
  };

  return (
    <Layout>
      <section className="mb-8 px-6 md:px-16 lg:px-24">
        <BreadCrumb />

        <div className="relative flex flex-col justify-between gap-8 md:flex-row">
          <form
            onSubmit={handleOnSubmit}
            className="absolute left-0 z-10 h-fit w-full rounded-xl border border-[#f0f0f0] bg-white px-4 py-2 md:static md:w-[238px]"
          >
            <div className="flex w-full items-center justify-between">
              <Heading
                title="filters"
                as="h6"
                className="font-semibold capitalize"
              />
              <button
                type="button"
                onClick={() => setShowFilters(!showFilters)}
                className="md:hidden"
              >
                {showFilters ? <X /> : <SlidersHorizontal />}
              </button>
              <SlidersHorizontal className="hidden md:block" />
            </div>

            <div
              className={`${showFilters ? 'visible block opacity-100' : 'invisible hidden opacity-0 md:visible md:block md:opacity-100'} transition-all duration-300`}
            >
              <Separator />
              <FilterClothes
                activeClothe={activeClothe}
                setActiveClothe={setActiveClothe}
              />
              <Separator />
              <FilterPrice
                activePrice={activePrice}
                setActivePrice={setActivePrice}
              />
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
              <FilterDressStyle
                activeDressStyle={activeDressStyle}
                setActiveDressStyle={setActiveDressStyle}
              />

              <div className="my-4 flex items-center justify-center gap-2">
                <Button type="submit" className="px-6">
                  apply
                </Button>

                <Button
                  onClick={handleOnReset}
                  variant="outline"
                  type="reset"
                  className="px-6"
                >
                  Clear
                </Button>
              </div>
            </div>
          </form>

          <ProductsList allProducts={allProducts} />
        </div>

        <Pagination
          allProductsRequest={allProductsRequest}
          setCurrentPage={setCurrentPage}
          page={page}
          pageCount={pageCount}
        />
      </section>
    </Layout>
  );
};

export default Shop;
