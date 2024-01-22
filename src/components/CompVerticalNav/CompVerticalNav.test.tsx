import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CompVerticalNav from './CompVerticalNav';

describe('<CompVerticalNav />', () => {
  test('it should mount', () => {
    render(<CompVerticalNav />);
    
    const compVerticalNav = screen.getByTestId('CompVerticalNav');

    expect(compVerticalNav).toBeInTheDocument();
  });
});