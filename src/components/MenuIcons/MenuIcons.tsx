'use client';

import { useCartStore } from '@/stores/cartStore';
import { CircleUser, ShoppingCart } from 'lucide-react';
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

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

          <button
            onClick={() => signOut()}
            className={`${showMenu ? 'visible opacity-100' : 'invisible opacity-0'} absolute -bottom-10 right-0 z-10 cursor-pointer rounded-lg bg-[#f0f0f0] p-4 px-4 py-2 text-zinc-400 shadow-lg duration-150 hover:text-black/95`}
          >
            Logout
          </button>
        </div>
      ) : (
        <div className="relative">
          <button
            className="cursor-pointer rounded-full p-2 duration-150 hover:bg-[#f0f0f0]"
            data-testid="user"
            onClick={() => setShowMenu(!showMenu)}
          >
            <CircleUser />
          </button>

          <Link
            href="/login"
            className={`${showMenu ? 'visible opacity-100' : 'invisible opacity-0'} absolute -bottom-10 right-0 z-10 cursor-pointer rounded-lg bg-[#f0f0f0] p-4 px-4 py-2 text-zinc-400 shadow-lg duration-150 hover:text-black/95`}
          >
            Login
          </Link>
        </div>
      )}
    </div>
  );
};
