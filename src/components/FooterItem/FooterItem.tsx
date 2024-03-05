import Link from 'next/link';
import { FC } from 'react';
import { Heading } from '..';

export interface FooterItemProps {
  title: string;
  links: {
    id: number;
    name: string;
    href: string;
  }[];
}

export const FooterItem: FC<FooterItemProps> = ({ title, links }) => {
  return (
    <div className="flex flex-col gap-2">
      <Heading
        title={title}
        uppercase
        as="h6"
        className="text-base font-normal"
      />

      {links.map((link) => (
        <Link
          key={link.id}
          href={link.href}
          className="text-sm capitalize text-zinc-500 duration-150 hover:text-black/95"
        >
          {link.name}
        </Link>
      ))}
    </div>
  );
};
