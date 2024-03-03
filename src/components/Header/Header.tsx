import { Logo, Menu, MenuIcons, NavLinks, Search } from '..';

export const Header = () => {
  return (
    <header className="flex items-center justify-between gap-8 px-6 py-6 md:px-16 lg:px-24">
      <div className="flex items-center gap-4">
        <Menu />
        <Logo />
        <NavLinks />
      </div>

      <div className="flex items-center gap-4 lg:w-1/2">
        <Search />
        <MenuIcons />
      </div>
    </header>
  );
};
