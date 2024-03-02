import Link from 'next/link';

const links = [
  {
    id: 1,
    name: 'shop',
    href: '/shop',
  },
  {
    id: 2,
    name: 'on sale',
    href: '/on-sale',
  },
  {
    id: 3,
    name: 'new arrivals',
    href: '/new-arrivals',
  },
  {
    id: 4,
    name: 'brands',
    href: '/brands',
  },
];

export const NavLinks = () => {
  return (
    <nav className="hidden items-center gap-2 capitalize md:flex">
      {links.map((link) => (
        <Link
          key={link.id}
          href={link.href}
          className="cursor-pointer duration-150 hover:text-zinc-600"
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
};
