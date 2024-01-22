import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CompNavHeader from './CompNavHeader';

describe('<CompNavHeader />', () => {
  test('it should mount', () => {
    render(<CompNavHeader closeIcon={() => 0} />);
    
    const compNavHeader = screen.getByTestId('CompNavHeader');

    expect(compNavHeader).toBeInTheDocument();
  });
});