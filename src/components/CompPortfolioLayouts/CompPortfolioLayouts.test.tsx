import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CompPortfolioLayouts from './CompPortfolioLayouts';

describe('<CompPortfolioLayouts />', () => {
  test('it should mount', () => {
    render(<CompPortfolioLayouts layout={''} />);
    
    const compPortfolioLayouts = screen.getByTestId('CompPortfolioLayouts');

    expect(compPortfolioLayouts).toBeInTheDocument();
  });
});