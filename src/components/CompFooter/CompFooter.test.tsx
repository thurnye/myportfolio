import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CompFooter from './CompFooter';

describe('<CompFooter />', () => {
  test('it should mount', () => {
    render(<CompFooter />);
    
    const compFooter = screen.getByTestId('CompFooter');

    expect(compFooter).toBeInTheDocument();
  });
});