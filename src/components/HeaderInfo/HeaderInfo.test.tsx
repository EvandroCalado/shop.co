import { render, screen } from '@testing-library/react';
import { HeaderInfo } from '.';

describe('<HeaderInfo />', () => {
  it('should render with default values', () => {
    render(<HeaderInfo />);

    expect(screen.getByText(/get 20% off/i)).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: 'Sign Up Now' }),
    ).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Sign Up Now' })).toHaveAttribute(
      'href',
      '/register',
    );
  });

  it('should render a snapshot', () => {
    const { container } = render(<HeaderInfo />);

    expect(container).toMatchSnapshot();
  });
});
