import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { MenuIcons } from '.';

describe('<MenuIcons />', () => {
  it('should render with default values', () => {
    render(<MenuIcons />);

    expect(screen.getByTestId('shop')).toBeInTheDocument();
    expect(screen.getByText(/2/i)).toBeInTheDocument();
    expect(screen.getByTestId('user')).toBeInTheDocument();
  });

  it('should render a snapshot', () => {
    const { container } = render(<MenuIcons />);

    expect(container).toMatchSnapshot();
  });
});
