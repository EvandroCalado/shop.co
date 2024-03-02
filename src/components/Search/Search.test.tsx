import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Search } from '.';

describe('<Search />', () => {
  it('should render with default values', () => {
    render(<Search />);

    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByRole('button')).toHaveAttribute('type', 'submit');
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toHaveAttribute(
      'placeholder',
      'Search for products...',
    );
  });

  it('should render a snapshot', () => {
    const { container } = render(<Search />);

    expect(container).toMatchSnapshot();
  });
});
