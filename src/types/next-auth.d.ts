import {} from 'next-auth/jwt';

declare module 'next-auth' {
  interface User {
    jwt: string;
  }

  interface Session {
    user: {
      id: string;
    };
  }
}
