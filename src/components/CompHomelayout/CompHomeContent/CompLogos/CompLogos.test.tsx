import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CompLogos from './CompLogos';

describe('<CompLogos />', () => {
  test('it should mount', () => {
    render(<CompLogos />);
    
    const compLogos = screen.getByTestId('CompLogos');

    expect(compLogos).toBeInTheDocument();
  });
});