import React from 'react';
import { render, screen } from '@testing-library/react';
import Logo from './';

describe('<Logo /> component', () => {
    render(<Logo />);
    const img = document.querySelector('img');

    test('exists in DOM', () => {
        expect(img).toBeInTheDocument();
    });

    test('has the right class', () => {
        expect(img).toHaveClass('Logo');
    });

    test('has "src" attribute with the logo', () => {
        expect(img).toHaveAttribute('src', 'logo.svg');
    });
});
