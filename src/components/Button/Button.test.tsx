import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Button } from '.';

describe('<Button />', () => {
  it('should render variant primary', () => {
    render(<Button variant="primary">teste</Button>);

    const button = screen.getByRole('button');

    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('bg-black/95 text-white');
    expect(button).not.toHaveClass('bg-white');
  });

  it('should render variant outline', () => {
    render(<Button variant="outline">teste</Button>);

    const button = screen.getByRole('button');

    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('bg-white text-black/95');
    expect(button).not.toHaveClass('bg-black/95');
  });

  it('should render a snapshot', () => {
    const { container } = render(<Button variant="outline">teste</Button>);

    expect(container).toMatchSnapshot();
  });
});
