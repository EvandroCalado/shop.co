import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { Header } from '.';

describe('<Header />', () => {
  it('should render a snapshot', () => {
    const { container } = render(<Header />);

    expect(container).toMatchSnapshot();
  });
});
