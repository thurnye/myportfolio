import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CompBrands from './CompBrands';

describe('<CompBrands />', () => {
  test('it should mount', () => {
    render(<CompBrands />);
    
    const compBrands = screen.getByTestId('CompBrands');

    expect(compBrands).toBeInTheDocument();
  });
});