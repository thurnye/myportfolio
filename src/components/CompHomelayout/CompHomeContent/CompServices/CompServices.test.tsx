import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CompServices from './CompServices';

describe('<CompServices />', () => {
  test('it should mount', () => {
    render(<CompServices />);
    
    const compServices = screen.getByTestId('CompServices');

    expect(compServices).toBeInTheDocument();
  });
});