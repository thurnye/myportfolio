import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CompDivider from './CompDivider';

describe('<CompDivider />', () => {
  test('it should mount', () => {
    render(<CompDivider />);
    
    const compDivider = screen.getByTestId('CompDivider');

    expect(compDivider).toBeInTheDocument();
  });
});