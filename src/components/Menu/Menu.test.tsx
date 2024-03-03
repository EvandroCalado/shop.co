import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { useState } from 'react';
import { Menu } from '.';

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: jest.fn(),
}));

describe('<Menu />', () => {
  it('should render with default values', () => {
    const mockSetShow = jest.fn();
    useState.mockReturnValue([false, mockSetShow]);

    render(<Menu />);

    expect(screen.getByTestId('menu')).toBeInTheDocument();
    expect(screen.getByTestId('menu-container')).toBeInTheDocument();
    expect(screen.getByTestId('menu-container')).toHaveClass('invisible');
    expect(screen.getByTestId('close')).toBeInTheDocument();

    expect(screen.getByTestId('menu-container')).toHaveClass(
      'invisible opacity-0',
    );
  });

  it('should render menu container visible', () => {
    const mockSetShow = jest.fn();
    useState.mockReturnValue([true, mockSetShow]);

    render(<Menu />);

    const menuButton = screen.getByTestId('menu');

    fireEvent.click(menuButton);

    expect(screen.getByTestId('menu-container')).toHaveClass(
      'visible opacity-100',
    );
  });

  it('should render menu container invisible', () => {
    const mockSetShow = jest.fn();
    useState.mockReturnValue([false, mockSetShow]);

    render(<Menu />);

    expect(screen.getByTestId('menu-container')).toHaveClass(
      'invisible opacity-0',
    );

    const closeButton = screen.getByTestId('close');

    fireEvent.click(closeButton);
  });

  it('should render a snapshot', () => {
    const { container } = render(<Menu />);

    expect(container).toMatchSnapshot();
  });
});
