import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CompRoutes from './CompRoutes';

describe('<CompRoutes />', () => {
  test('it should mount', () => {
    render(<CompRoutes />);
    
    const compRoutes = screen.getByTestId('CompRoutes');

    expect(compRoutes).toBeInTheDocument();
  });
});