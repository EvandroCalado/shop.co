import { ArrowRight, Tag } from 'lucide-react';
import { Button, Input, Separator } from '..';

export const OrderSummary = () => {
  return (
    <div className="flex w-full flex-col gap-2 rounded-2xl border-[1px] border-[#f0f0f0] p-4 lg:flex-1">
      <h3 className="text-lg font-semibold capitalize md:text-xl">
        Order Summary
      </h3>
      <div className="flex items-center justify-between">
        <span className="capitalize text-zinc-400">subtotal</span>
        <span className="text-lg font-semibold">$145</span>
      </div>
      <div className="flex items-center justify-between">
        <span className="capitalize text-zinc-400">discount(-20%)</span>
        <span className="text-lg font-semibold text-red-500">-$145</span>
      </div>
      <div className="flex items-center justify-between">
        <span className="capitalize text-zinc-400">delivery free</span>
        <span className="text-lg font-semibold">$15</span>
      </div>

      <Separator />

      <div className="flex items-center justify-between">
        <span className="capitalize">total</span>
        <span className="text-2xl font-semibold">$145</span>
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
      <Button className="mt-2 flex w-full items-center justify-center gap-2">
        go to checkout <ArrowRight size={18} />
      </Button>
    </div>
  );
};
