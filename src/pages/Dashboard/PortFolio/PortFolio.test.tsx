import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PortFolio from './PortFolio';

describe('<PortFolio />', () => {
  test('it should mount', () => {
    render(<PortFolio />);
    
    const portFolio = screen.getByTestId('PortFolio');

    expect(portFolio).toBeInTheDocument();
  });
});