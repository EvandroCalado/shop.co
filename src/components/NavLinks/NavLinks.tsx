import Link from 'next/link';
import { menuLinks } from '../../utils/menuLinks';

export const NavLinks = () => {
  return (
    <nav className="hidden items-center gap-2 capitalize md:flex">
      {menuLinks.map((link) => (
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
