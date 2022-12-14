import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Header from './Header';

describe('Header', () => {
  it('should display the title', () => {
    render(<Header />);
    const headerTitle = screen.getByText(/music is life/i);
    expect(headerTitle).toBeInTheDocument();
  });

  it('should display the PLAY button and call function setStartSlider when play button is clicked', () => {
    const mockSetStartSlider = jest.fn();
    render(
      <Header
        setStartSlider={mockSetStartSlider}
      />
    );
    const playButton = screen.getByRole('button', { name: /play/i });
    expect(playButton).toBeInTheDocument();
    userEvent.click(playButton);
    expect(mockSetStartSlider).toHaveBeenCalled();
  });

  it('should display the PAUSE button and call function handleCancelClick when pause button is clicked', () => {
    const mockHandleCancelClick = jest.fn();
    render(<Header handleCancelClick={mockHandleCancelClick} />);
    const pauseButton = screen.getByRole('button', { name: /pause/i });
    expect(pauseButton).toBeInTheDocument();
    userEvent.click(pauseButton);
    expect(mockHandleCancelClick).toHaveBeenCalled();
  });
  it('should display the PREVIOUS button and call function prevSlide when previous button is clicked', () => {
    const mockPrevSlide = jest.fn();
    render(<Header prevSlide={mockPrevSlide} />);
    const previousButton = screen.getByRole('button', { name: /previous/i });
    expect(previousButton).toBeInTheDocument();
    userEvent.click(previousButton);
    expect(mockPrevSlide).toHaveBeenCalled();
  });
  it('should display the NEXT button and call function nextSlide when previous button is clicked', () => {
    const mockNextSlide = jest.fn();
    render(<Header nextSlide={mockNextSlide} />);
    const nextButton = screen.getByRole('button', { name: /next/i });
    expect(nextButton).toBeInTheDocument();
    userEvent.click(nextButton);
    expect(mockNextSlide).toHaveBeenCalled();
  });

  it('should display the light/dark mode button', () => {
    const { getByRole } = render(<Header />);
    // eslint-disable-next-line testing-library/prefer-screen-queries
    expect(getByRole('button', { name: /mode/i })).toBeInTheDocument();
  });
  it('should display the STOP button and call setIndex when stop button is clicked', () => {
    const mockSetIndex = jest.fn();
    render(<Header setIndex={mockSetIndex} />);
    const stopButton = screen.getByRole('button', { name: /stop/i });
    expect(stopButton).toBeInTheDocument();
    userEvent.click(stopButton);
    expect(mockSetIndex).toHaveBeenCalled();
  });
});
