'use client';

import { getAllColors } from '@/actions/colors/getAllColors';
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
  Separator,
} from '@/components';
import { useActiveColor } from '@/hooks/useActiveColor';
import { useActiveSize } from '@/hooks/useActiveSize';
import { ColorsType } from '@/types/colorsType';
import { SizesType } from '@/types/sizesType';
import { SlidersHorizontal } from 'lucide-react';
import { useCallback, useEffect, useState } from 'react';

const Shop = () => {
  const [allColors, setAllColors] = useState<ColorsType>();
  const [allSizes, setAllSizes] = useState<SizesType>();
  const { activeColor, setActiveColor } = useActiveColor('');
  const { activeSize, setActiveSize } = useActiveSize('');

  console.log(activeColor);
  console.log(activeSize);

  const getColors = useCallback(async () => {
    const colors = await getAllColors();
    setAllColors(colors);
  }, []);

  const getSizes = useCallback(async () => {
    const sizes = await getAllSizes();
    setAllSizes(sizes);
  }, []);

  useEffect(() => {
    getColors();
    getSizes();
  }, [getColors, getSizes]);

  return (
    <Layout>
      <section className="mb-16 px-6 md:px-16 lg:px-24">
        <BreadCrumb />

        <div className="flex flex-col items-center gap-8 lg:flex-row">
          <form className="w-[238px] rounded-xl border border-[#f0f0f0] px-4 py-2">
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

          <div className="flex flex-1 items-center">Shop</div>
        </div>
      </section>
    </Layout>
  );
};

export default Shop;
