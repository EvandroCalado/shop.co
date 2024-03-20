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
  Separator,
} from '@/components';
import { SlidersHorizontal } from 'lucide-react';

const Shop = () => {
  return (
    <Layout>
      <section className="mb-16 px-6 md:px-16 lg:px-24">
        <BreadCrumb />

        <div className="flex flex-col items-center gap-8 lg:flex-row">
          <div className="w-[238px] rounded-xl border border-[#f0f0f0] px-4 py-2">
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
            <FilterColors />
            <Separator />
            <FilterSizes />
            <Separator />
            <FilterDressStyle />

            <div className="my-4 text-center">
              <Button type="submit">apply filter</Button>
            </div>
          </div>

          <div className="flex flex-1 items-center">Shop</div>
        </div>
      </section>
    </Layout>
  );
};

export default Shop;
