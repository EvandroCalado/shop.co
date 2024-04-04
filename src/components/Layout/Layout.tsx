import { Footer, Header, HeaderInfo, NewsLetter } from '..';

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <HeaderInfo />
      <Header />
      {children}
      <NewsLetter />
      <Footer />
    </>
  );
};
