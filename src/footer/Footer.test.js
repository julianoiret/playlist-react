/* eslint-disable testing-library/await-async-query */
/* eslint-disable testing-library/prefer-screen-queries */
import { render } from '@testing-library/react';
import Footer from './Footer';

describe('Footer', () => {
  it('should render Kevin name', () => {
    const { getAllByText } = render(<Footer />);
    expect(getAllByText('Kevin Hanard')).toBeTruthy();
  });
  it('should render Julia name', () => {
    const { getAllByText } = render(<Footer />);
    expect(getAllByText('Julia Hanard')).toBeTruthy();
  });

  // todo check link
});
