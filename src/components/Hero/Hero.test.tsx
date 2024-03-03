import { render, screen } from '@testing-library/react';
import { Hero } from '.';

describe('<Hero />', () => {
  it('Shroud render with default value', () => {
    render(<Hero />);

    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
    expect(screen.getByText(/Browse through/i)).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: 'shop now' }),
    ).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: '200+' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: '2,000+' })).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: '30,000+' }),
    ).toBeInTheDocument();
    expect(screen.getByRole('img')).toBeInTheDocument();
  });

  it('Shroud render a snapshot', () => {
    const { container } = render(<Hero />);

    expect(container).toMatchSnapshot();
  });
});
