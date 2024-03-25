import { CartItem } from '..';

export const CartList = () => {
  return (
    <div className="flex h-fit w-full flex-col gap-4 rounded-2xl border-[1px] border-[#f0f0f0] p-4 lg:flex-[2]">
      <CartItem />
      <CartItem />
      <CartItem />
    </div>
  );
};
