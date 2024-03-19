'use client';

import { useActive } from '@/hooks/useActive';
import { ProductType } from '@/types/productsType';
import { FC } from 'react';
import { Faq, ProductDetails, Rating } from '..';

export interface ProductTabsProps {
  product: ProductType;
}

export const ProductTabs: FC<ProductTabsProps> = ({ product }) => {
  const tabs = ['product details', 'rating & reviews', 'FAQs'];

  const { active, setActive } = useActive(tabs[0]);

  const { details, ratings } = product.attributes;

  return (
    <section className="mb-16">
      <div className="my-8 flex w-full items-center justify-between">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className={`${active === tab ? 'border-b-[2px] border-black/95 text-black/95' : 'border-b-[2px] border-transparent text-zinc-500'} w-full cursor-pointer p-2 capitalize duration-150 hover:text-black/95`}
          >
            {tab}
          </button>
        ))}
      </div>

      {active === 'product details' && <ProductDetails details={details} />}
      {active === 'rating & reviews' && <Rating ratings={ratings} />}
      {active === 'FAQs' && <Faq />}
    </section>
  );
};
