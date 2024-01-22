import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CompHomelayout from './CompHomelayout';

describe('<CompHomelayout />', () => {
  test('it should mount', () => {
    render(<CompHomelayout />);
    
    const compHomelayout = screen.getByTestId('CompHomelayout');

    expect(compHomelayout).toBeInTheDocument();
  });
});