import '@testing-library/jest-dom'
import { fireEvent, render, screen } from "@testing-library/react"
import App from "../App"

describe('App', () => {
    test("Renders the main page", () => {
        render(<App />)
        expect(true).toBeTruthy()
    })
});

describe('Buttons', () => {
    test("should render a button with the class of next", () => {
        render(<App />);

        const next = screen.getByRole('button', {
            name: /next-btn/i
        })

        expect(next).toHaveClass('next')

    })

});

describe('Buttons', () => {
    test("should render a button with the class of prev", () => {
        render(<App />);

        const next = screen.getByRole('button', {
            name: /next-btn/i
        })

        fireEvent.click(next);

        const prev = screen.getByRole('button', {
            name: /prev-btn/i
        })

        expect(prev).toHaveClass('prev')

    })

});


describe('Buttons', () => {
    test("should click a button with the class of next, prev button should appear", () => {
        render(<App />);

        const next = screen.getByRole('button', {
            name: /next-btn/i
        })

        fireEvent.click(next);

        const prev = screen.getByRole('button', {
            name: /prev-btn/i
        })

        expect(prev).toBeInTheDocument();

    })
});


describe('Images', () => {
    test('First image has = "https://picsum.photos/id/600/1600/900.jpg" and alt = "Single Random Image id 0"', () => {
        render(<App />);
        const firsImage = screen.getByRole('img', {
            name: /0/i
        });
        expect(firsImage).toHaveAttribute('src', 'https://picsum.photos/id/600/1600/900.jpg');
        expect(firsImage).toHaveAttribute('alt', 'Single Random Image id 0');
    });
});

describe('Images', () => {
    test('After Next Button Clicked Second image has = "https://picsum.photos/id/602/1600/900.jpg" and alt = "Single Random Image id 1"', () => {
        render(<App />);

        const next = screen.getByRole('button', {
            name: /next-btn/i
        })

        fireEvent.click(next);

        const firsImage = screen.getByRole('img', {
            name: /1/i
        });
        expect(firsImage).toHaveAttribute('src', 'https://picsum.photos/id/602/1600/900.jpg');
        expect(firsImage).toHaveAttribute('alt', 'Single Random Image id 1');
    });
});