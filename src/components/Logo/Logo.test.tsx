import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Logo } from '.';

describe('<Logo />', () => {
  it('should render with default value', () => {
    render(<Logo />);

    expect(screen.getByRole('link')).toBeInTheDocument();
    expect(screen.getByRole('link')).toHaveAttribute('href', '/');
    expect(
      screen.getByRole('heading', { name: 'shop.co' }),
    ).toBeInTheDocument();
  });

  it('should render a snapshot', () => {
    const { container } = render(<Logo />);

    expect(container).toMatchSnapshot();
  });
});
