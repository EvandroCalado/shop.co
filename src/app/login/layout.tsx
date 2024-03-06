import { Logo } from '@/components';
import { FC } from 'react';

const LoginLayout: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <div className="px-6 py-6 md:px-16 lg:px-24">
        <Logo />
      </div>
      {children}
    </>
  );
};

export default LoginLayout;
