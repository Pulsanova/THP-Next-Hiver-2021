import React from 'react';
import { render } from '@testing-library/react';
import Logo from './';

describe('<Logo /> component', () => {
    render(<Logo />);
    const img = document.querySelector('img');

    test('matches HTML snapshot correctly', () => {
        expect(img).toMatchSnapshot();
    });
});
