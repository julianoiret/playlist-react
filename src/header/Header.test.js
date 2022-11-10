import { render, screen } from '@testing-library/react';
import Header from './Header';

describe("Header", () => {
    it("should display the title", () => {
        render(<Header />);
        const headerTitle = screen.getByText(/music is life/i);
        expect(headerTitle).toBeInTheDocument();
    });
});

// TODO: test the buttons