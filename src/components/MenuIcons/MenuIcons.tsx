'use client';

import { useCartStore } from '@/stores/cartStore';
import {
  CircleUser,
  LogOut,
  NotebookText,
  ShoppingCart,
  UserCog,
} from 'lucide-react';
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Button } from '..';

export const MenuIcons = () => {
  const [showMenu, setShowMenu] = useState(false);
  const { data: session } = useSession();
  const cartItems = useCartStore((state) => state.cartItems);

  const router = useRouter();

  const handleOnCLick = () => {
    router.push('/cart');
  };

  const totalCartItems = cartItems.reduce((acc, item) => {
    return acc + item.quantity;
  }, 0);

  return (
    <div className="flex items-center gap-2 sm:gap-4">
      <button
        className="relative cursor-pointer rounded-full p-2 duration-150 hover:bg-[#f0f0f0]"
        onClick={handleOnCLick}
      >
        <ShoppingCart data-testid="shop" />
        {cartItems.length > 0 && (
          <span className="absolute right-0 top-0 flex h-4 w-4 items-center justify-center rounded-full border border-white bg-black/95 text-[10px] text-white">
            {totalCartItems}
          </span>
        )}
      </button>

      {session ? (
        <div className="relative">
          <button
            className="cursor-pointer rounded-full p-2 duration-150 hover:bg-[#f0f0f0]"
            data-testid="user"
            onClick={() => setShowMenu(!showMenu)}
          >
            <CircleUser />
          </button>

          <div
            className={`${showMenu ? 'visible opacity-100' : 'invisible opacity-0'} absolute -bottom-[8rem] right-0 z-10 flex cursor-pointer flex-col gap-2 rounded-lg bg-[#f0f0f0] px-4 py-2 text-zinc-400 shadow-lg`}
          >
            <Link href="/profile">
              <button className="hover:bg-black-95 m-0 flex w-full items-center justify-between gap-2 rounded-md px-3 py-1 capitalize duration-150 hover:bg-zinc-100">
                <UserCog size={18} />
                profile
              </button>
            </Link>
            <Link href="/orders">
              <button className="hover:bg-black-95 m-0 flex w-full items-center justify-between gap-2 rounded-md px-3 py-1 capitalize duration-150 hover:bg-zinc-100">
                <NotebookText size={18} />
                orders
              </button>
            </Link>
            <button
              onClick={() => signOut()}
              className="hover:bg-black-95 m-0 flex w-full items-center justify-between gap-2 rounded-md px-3 py-1 capitalize duration-150 hover:bg-zinc-100"
            >
              <LogOut size={18} />
              logout
            </button>
          </div>
        </div>
      ) : (
        <Link href="/login" className=" bg-">
          <Button className="px-6 py-2">login</Button>
        </Link>
      )}
    </div>
  );
};
