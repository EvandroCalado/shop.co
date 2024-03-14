import { Footer, Header, HeaderInfo } from '..';

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <HeaderInfo />
      <Header />
      {children}
      <Footer />
    </>
  );
};
