import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CompMasonryLayout from './CompMasonryLayout';

describe('<CompMasonryLayout />', () => {
  test('it should mount', () => {
    render(<CompMasonryLayout type={''} />);
    
    const compMasonryLayout = screen.getByTestId('CompMasonryLayout');

    expect(compMasonryLayout).toBeInTheDocument();
  });
});