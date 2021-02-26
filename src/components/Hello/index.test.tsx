import React from 'react';
import { render, screen } from '@testing-library/react';
import Hello from './';

describe('Hello component', () => {
    test('Renders text "Hello World!"', () => {
      render(<Hello />);
      const content = screen.getByText(/Hello World!/i);
      expect(content).toBeInTheDocument();
    });
});
