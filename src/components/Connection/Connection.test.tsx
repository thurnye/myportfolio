import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Connection from './Connection';

describe('<Connection />', () => {
  test('it should mount', () => {
    render(<Connection />);
    
    const connection = screen.getByTestId('Connection');

    expect(connection).toBeInTheDocument();
  });
});