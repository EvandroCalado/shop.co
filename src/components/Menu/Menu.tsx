'use client';

import { menuLinks } from '@/utils/menuLinks';
import { Menu as MenuIcon, X } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { Logo } from '..';

export const Menu = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="md:hidden">
      <button onClick={() => setShowMenu(!showMenu)} data-testid="menu">
        <MenuIcon />
      </button>

      <div
        className={`${showMenu ? 'visible opacity-100' : 'invisible opacity-0'} fixed inset-0 z-10 m-auto flex h-[95%] w-[95%] flex-col items-center justify-center gap-4 rounded-lg bg-[#f0f0f0] capitalize transition-all duration-300`}
        data-testid="menu-container"
      >
        <button
          onClick={() => setShowMenu(!showMenu)}
          className="absolute left-3 top-4 sm:left-[7px]"
          data-testid="close"
        >
          <X className="text-red-600" />
        </button>

        <Logo />
        {menuLinks.map((link) => (
          <Link
            key={link.id}
            href={link.href}
            className="cursor-pointer duration-150 hover:text-zinc-600"
          >
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  );
};
