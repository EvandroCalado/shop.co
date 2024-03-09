import Link from 'next/link';
import { FC } from 'react';
import { twMerge } from 'tailwind-merge';

interface LogoProps {
  className?: string;
}

export const Logo: FC<LogoProps> = ({ className }) => {
  return (
    <Link
      href="/"
      className={twMerge('text-2xl font-black uppercase sm:block', className)}
    >
      <h1>shop.co</h1>
    </Link>
  );
};
