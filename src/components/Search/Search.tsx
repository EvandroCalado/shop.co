import { Search as SearchIcon } from 'lucide-react';

export const Search = () => {
  return (
    <form className="flex w-full items-center gap-2 rounded-full bg-[#f0f0f0] px-4 py-2">
      <button type="submit">
        <SearchIcon className="w-4 text-zinc-400" />
      </button>

      <input
        type="text"
        placeholder="Search for products..."
        className="w-full bg-transparent text-sm outline-none"
      />
    </form>
  );
};
