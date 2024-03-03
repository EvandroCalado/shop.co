import { render, screen } from '@testing-library/react';
import { BrandsBar } from '.';

describe('<BrandsBar />', () => {
  it('shroud render with default values', () => {
    render(<BrandsBar />);

    expect(screen.getByAltText('versace')).toBeInTheDocument();
    expect(screen.getByAltText('zara')).toBeInTheDocument();
    expect(screen.getByAltText('gucci')).toBeInTheDocument();
    expect(screen.getByAltText('prada')).toBeInTheDocument();
    expect(screen.getByAltText('calvin')).toBeInTheDocument();
  });

  it('shroud render a snapshot', () => {
    const { container } = render(<BrandsBar />);

    expect(container).toMatchSnapshot();
  });
});
