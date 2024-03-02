import { CircleUser, ShoppingCart } from 'lucide-react';

export const MenuIcons = () => {
  return (
    <div className="flex items-center gap-4">
      <div className="relative cursor-pointer rounded-full p-2 duration-150 hover:bg-[#f0f0f0]">
        <ShoppingCart data-testid="shop" />
        <span className="absolute right-0 top-0 flex h-4 w-4 items-center justify-center rounded-full border border-white bg-black/95 text-[10px] text-white">
          2
        </span>
      </div>

      <div className="cursor-pointer rounded-full p-2 duration-150 hover:bg-[#f0f0f0]">
        <CircleUser data-testid="user" />
      </div>
    </div>
  );
};
