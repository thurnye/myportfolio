import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CompHamburgerTransition from './CompHamburgerTransition';

describe('<CompHamburgerTransition />', () => {
  test('it should mount', () => {
    render(<CompHamburgerTransition />);
    
    const compHamburgerTransition = screen.getByTestId('CompHamburgerTransition');

    expect(compHamburgerTransition).toBeInTheDocument();
  });
});