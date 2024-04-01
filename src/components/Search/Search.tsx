'use client';

import { Search as SearchIcon } from 'lucide-react';
import { useSearchParams } from 'next/navigation';

export const Search = () => {
  const query = useSearchParams();

  return (
    <form
      action="/shop"
      method="get"
      className="flex w-full items-center gap-2 rounded-full bg-[#f0f0f0] px-4 py-2"
    >
      <button type="submit">
        <SearchIcon className="w-4 text-zinc-400" />
      </button>

      <input
        type="search"
        name="q"
        defaultValue={query.get('q') || ''}
        placeholder="Search..."
        className="w-full bg-transparent text-sm outline-none"
      />
    </form>
  );
};
