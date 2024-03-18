'use client';

import { useActive } from '@/hooks/useActive';
import { Rating } from '..';

export const ProductTabs = () => {
  const tabs = ['product details', 'rating & reviews', 'FAQs'];

  const { active, setActive } = useActive(tabs[0]);

  return (
    <section>
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

      {active === 'product details' && <div>Product Details</div>}
      {active === 'rating & reviews' && <Rating />}
      {active === 'FAQs' && <div>FAQs</div>}
    </section>
  );
};
