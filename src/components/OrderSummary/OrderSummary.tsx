'use client';

import { useCartStore } from '@/stores/cartStore';
import { calcDiscount } from '@/utils/calcDiscount';
import { customFetch } from '@/utils/customFetch';
import { loadStripe } from '@stripe/stripe-js';
import { AxiosError } from 'axios';
import { ArrowRight, Tag } from 'lucide-react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { Button, Input, Separator } from '..';

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string,
);

export const OrderSummary = () => {
  const cartItems = useCartStore((state) => state.cartItems);
  const { data: session } = useSession();
  const router = useRouter();

  const subtotalWithDiscount = cartItems.reduce((acc, item) => {
    return (
      acc +
      item.quantity *
        calcDiscount(
          item.product.data.attributes.price,
          item.product.data.attributes.discount,
        )
    );
  }, 0);

  const subtotalWithoutDiscount = cartItems.reduce((acc, item) => {
    return acc + item.quantity * item.product.data.attributes.price;
  }, 0);

  const totalPercentageDiscount = cartItems.reduce((acc, item) => {
    return acc + item.product.data.attributes.discount / cartItems.length;
  }, 0);

  const totalDiscount = subtotalWithoutDiscount - subtotalWithDiscount;

  const deliveryCost = 0;

  const handlePayment = async () => {
    if (!session) {
      return router.push('/login?redirect=/cart');
    }

    try {
      const stripe = await stripePromise;
      const response = await customFetch.post('/orders', {
        products: cartItems,
        userId: session.user.id,
      });

      await stripe?.redirectToCheckout({
        sessionId: response.data.stripeSession.id,
      });
    } catch (error) {
      if (error instanceof AxiosError) {
        console.log(error.response?.data?.error?.message);
        throw new Error(error.response?.data?.error?.message);
      }
    }
  };

  return (
    <div className="flex w-full flex-col gap-2 rounded-2xl border-[1px] border-[#f0f0f0] p-4 lg:flex-1">
      <h3 className="text-lg font-semibold capitalize md:text-xl">
        Order Summary
      </h3>
      <div className="flex items-center justify-between">
        <span className="capitalize text-zinc-400">subtotal</span>
        <span className="text-lg font-semibold">
          ${subtotalWithDiscount.toFixed(2)}
        </span>
      </div>
      <div className="flex items-center justify-between">
        <span className="capitalize text-zinc-400">
          discount(-{totalPercentageDiscount.toFixed(2)}%)
        </span>
        <span className="text-lg font-semibold text-red-500">
          -${totalDiscount.toFixed(2)}
        </span>
      </div>
      <div className="flex items-center justify-between">
        <span className="capitalize text-zinc-400">delivery free</span>
        <span className="text-lg font-semibold">${deliveryCost}</span>
      </div>

      <Separator />

      <div className="flex items-center justify-between">
        <span className="capitalize">total</span>
        <span className="text-2xl font-semibold">
          ${(subtotalWithDiscount + deliveryCost).toFixed(2)}
        </span>
      </div>
      <div className="flex items-center gap-2">
        <Input
          type="text"
          placeholder="Add promo code"
          variant="contrast"
          icon={<Tag />}
        />
        <Button className="px-6">apply</Button>
      </div>
      <Button
        onClick={handlePayment}
        className="mt-2 flex w-full items-center justify-center gap-2"
      >
        go to checkout <ArrowRight size={18} />
      </Button>
    </div>
  );
};
