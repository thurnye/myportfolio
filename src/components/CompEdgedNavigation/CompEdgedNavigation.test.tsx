import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CompEdgedNavigation from './CompEdgedNavigation';

describe('<CompEdgedNavigation />', () => {
  test('it should mount', () => {
    render(<CompEdgedNavigation />);
    
    const compEdgedNavigation = screen.getByTestId('CompEdgedNavigation');

    expect(compEdgedNavigation).toBeInTheDocument();
  });
});