import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { SessionProvider } from 'next-auth/react';
import { vi } from 'vitest';
import { MenuIcons } from '.';

describe('<MenuIcons />', () => {
  afterEach(() => {
    vi.resetAllMocks();
  });

  it('should render with default values', () => {
    render(
      <SessionProvider>
        <MenuIcons />
      </SessionProvider>,
    );

    expect(screen.getByTestId('shop')).toBeInTheDocument();
    expect(screen.getByText(/2/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'login' })).toBeInTheDocument();
  });

  // it('should render with user logged in', () => {
  //   const mockSession = { user: 'John Doe' };
  //   vi.mock('next-auth', () => ({
  //     useSession: vi.fn(() => ({ data: mockSession })),
  //   }));

  //   render(
  //     <SessionProvider>
  //       <MenuIcons />
  //     </SessionProvider>,
  //   );

  //   expect(screen.getByTestId('user')).toBeInTheDocument();
  // });

  it('should render a snapshot', () => {
    const { container } = render(
      <SessionProvider>
        <MenuIcons />
      </SessionProvider>,
    );

    expect(container).toMatchSnapshot();
  });
});
