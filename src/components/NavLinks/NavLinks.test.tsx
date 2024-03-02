import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { NavLinks } from '.';

describe('<NavLinks />', () => {
  it('should render with default values', () => {
    render(<NavLinks />);

    expect(screen.getByRole('link', { name: 'shop' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'shop' })).toHaveAttribute(
      'href',
      '/shop',
    );

    expect(screen.getByRole('link', { name: 'on sale' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'on sale' })).toHaveAttribute(
      'href',
      '/on-sale',
    );

    expect(
      screen.getByRole('link', { name: 'new arrivals' }),
    ).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'new arrivals' })).toHaveAttribute(
      'href',
      '/new-arrivals',
    );

    expect(screen.getByRole('link', { name: 'brands' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'brands' })).toHaveAttribute(
      'href',
      '/brands',
    );
  });

  it('should render a snapshot', () => {
    const { container } = render(<NavLinks />);

    expect(container).toMatchSnapshot();
  });
});
