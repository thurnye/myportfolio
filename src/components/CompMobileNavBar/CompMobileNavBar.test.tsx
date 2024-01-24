import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CompMobileNavBar from './CompMobileNavBar';

describe('<CompMobileNavBar />', () => {
  test('it should mount', () => {
    render(<CompMobileNavBar handleDrawer={() => ''} openMenu={() => ''} />);
    
    const compMobileNavBar = screen.getByTestId('CompMobileNavBar');

    expect(compMobileNavBar).toBeInTheDocument();
  });
});