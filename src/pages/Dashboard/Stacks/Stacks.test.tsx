import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Stacks from './Stacks';

describe('<Stacks />', () => {
  test('it should mount', () => {
    render(<Stacks />);
    
    const stacks = screen.getByTestId('Stacks');

    expect(stacks).toBeInTheDocument();
  });
});