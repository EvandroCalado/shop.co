'use client';

import { CartList, Heading, Layout, OrderSummary } from '@/components';
import { useCartStore } from '@/stores/cartStore';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

const Cart = () => {
  const { cartItems } = useCartStore();

  return (
    <Layout>
      <section className="space-y-8 px-6 py-6 md:px-16 lg:px-24">
        <div className="flex w-full items-center gap-1">
          <Link
            href="/"
            className="flex items-center gap-1 text-sm capitalize text-zinc-400 duration-150 hover:text-black/95"
          >
            home
          </Link>
          <ChevronRight size={18} color="rgb(161 161 170)" />
          <Link
            href="/cart"
            className="flex items-center gap-1 text-sm capitalize text-zinc-400 duration-150 hover:text-black/95"
          >
            cart
          </Link>
        </div>

        <Heading title="your cart" uppercase as="h2" />

        <div className="flex w-full flex-col gap-4 md:flex-row">
          <CartList cartItems={cartItems} />
          <OrderSummary />
        </div>
      </section>
    </Layout>
  );
};

export default Cart;
