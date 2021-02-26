import React from 'react';
import { render, screen } from '@testing-library/react';
import Hello from './';

describe('<Hello /> component without user', () => {
    render(<Hello user={null} />);
    // console.log(screen.debug());
    const heading = screen.getByRole('heading');

    test('exists in DOM', () => {
        expect(heading).toBeInTheDocument();
    });

    test('has the right class', () => {
        expect(heading).toHaveClass('Hello');
    });

    test('contains text "Hello World!"', () => {
        expect(heading).toHaveTextContent('Hello World!');
    });
});
