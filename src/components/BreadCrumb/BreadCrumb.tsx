import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { FC } from 'react';

export interface BreadCrumbProps {
  name?: string;
  id?: number;
}

export const BreadCrumb: FC<BreadCrumbProps> = ({ name, id }) => {
  return (
    <div className="my-8 flex items-center gap-1 text-sm text-zinc-400">
      <span className="flex items-center gap-1">
        <Link href="/" className="hover:underline">
          Home
        </Link>
      </span>
      <ChevronRight size={16} />
      <span className="flex items-center gap-1">
        <Link href="/shop" className="hover:underline">
          Shop
        </Link>
      </span>
      {name && <ChevronRight size={16} />}
      {name && (
        <span className="flex items-center capitalize">
          <Link href={`/product/${id}`} className="hover:underline">
            {name}
          </Link>
        </span>
      )}
    </div>
  );
};
