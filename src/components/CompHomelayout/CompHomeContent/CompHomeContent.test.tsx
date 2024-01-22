import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CompHomeContent from './CompHomeContent';

describe('<CompHomeContent />', () => {
  test('it should mount', () => {
    render(<CompHomeContent />);
    
    const compHomeContent = screen.getByTestId('CompHomeContent');

    expect(compHomeContent).toBeInTheDocument();
  });
});