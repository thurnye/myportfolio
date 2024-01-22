import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CompJumbotron from './CompJumbotron';

describe('<CompJumbotron />', () => {
  test('it should mount', () => {
    render(<CompJumbotron />);
    
    const compJumbotron = screen.getByTestId('CompJumbotron');

    expect(compJumbotron).toBeInTheDocument();
  });
});