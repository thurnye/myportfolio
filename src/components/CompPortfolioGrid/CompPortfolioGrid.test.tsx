import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CompPortfolioGrid from './CompPortfolioGrid';

describe('<CompPortfolioGrid />', () => {
  test('it should mount', () => {
    render(<CompPortfolioGrid setStructure={() => ''} nav={[]}/>);
    
    const compPortfolioGrid = screen.getByTestId('CompPortfolioGrid');

    expect(compPortfolioGrid).toBeInTheDocument();
  });
});