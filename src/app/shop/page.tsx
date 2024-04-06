'use client';

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

  const [showFilters, setShowFilters] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const { all, active, setActive, getProducts } = useFilters({
    activeName,
    currentPage,
  });

  const { page, pageCount } = all.allProducts
    ? all.allProducts.meta.pagination
    : { page: 0, pageCount: 0 };

  const handleOnSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    getProducts();
    setShowFilters(false);
  };

  const handleOnReset = () => {
    setActive.setActiveClothe('');
    setActive.setActivePrice(0);
    setActive.setActiveColor('');
    setActive.setActiveSize('');
    setActive.setActiveDressStyle('');
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
                activeClothe={active.activeClothe}
                setActiveClothe={setActive.setActiveClothe}
              />
              <Separator />
              <FilterPrice
                activePrice={active.activePrice}
                setActivePrice={setActive.setActivePrice}
              />
              <Separator />
              <FilterColors
                allColors={all.allColors}
                activeColor={active.activeColor}
                setActiveColor={setActive.setActiveColor}
              />
              <Separator />
              <FilterSizes
                allSizes={all.allSizes}
                activeSize={active.activeSize}
                setActiveSize={setActive.setActiveSize}
              />
              <Separator />
              <FilterDressStyle
                activeDressStyle={active.activeDressStyle}
                setActiveDressStyle={setActive.setActiveDressStyle}
              />

              <div className="my-4 flex items-center justify-center gap-2">
                <Button onClick={handleOnReset} type="reset" className="w-full">
                  Clear
                </Button>
              </div>
            </div>
          </form>

          <ProductsList allProducts={all.allProducts} />
        </div>

        <Pagination
          setCurrentPage={setCurrentPage}
          page={page}
          pageCount={pageCount}
        />
      </section>
    </Layout>
  );
};

export default Shop;
