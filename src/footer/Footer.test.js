/* eslint-disable testing-library/prefer-screen-queries */
import { render } from '@testing-library/react';
import Footer from './Footer';

describe('Footer', () => {
  it('should render Kevin name', () => {
    const { getByText } = render(<Footer />);
    expect(getByText('Kevin Hanard')).toBeInTheDocument();
  });
  it('should render Julia name', () => {
    const { getByText } = render(<Footer />);
    expect(getByText('Julia Hanard')).toBeInTheDocument();
  });

  it('should navigate to Kevin LinkedIn when logo/link is clicked', () => {
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    const { getByTestId } = render(<a data-testid='link' href="https://www.linkedin.com/in/kevin-hanard-275165a5/"></a>);
    expect(getByTestId('link')).toHaveAttribute('href', 'https://www.linkedin.com/in/kevin-hanard-275165a5/');
  });

  it('should navigate to Julia LinkedIn when logo/link is clicked', () => {
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    const { getByTestId } = render(<a data-testid='link' href="https://www.linkedin.com/in/julia-hanard-332395ab/"></a>);
    expect(getByTestId('link')).toHaveAttribute('href', 'https://www.linkedin.com/in/julia-hanard-332395ab/');
  });

  it('should navigate to Kevin Github when logo/link is clicked', () => {
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    const { getByTestId } = render(<a data-testid='link' href="https://github.com/beyondthefruit"></a>);
    expect(getByTestId('link')).toHaveAttribute('href', 'https://github.com/beyondthefruit');
  });

  it('should navigate to Julia Github when logo/link is clicked', () => {
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    const { getByTestId } = render(<a data-testid='link' href="https://github.com/julianoiret"></a>);
    expect(getByTestId('link')).toHaveAttribute('href', 'https://github.com/julianoiret');
  });
});
