import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CompCode from './CompCode';

describe('<CompCode />', () => {
  test('it should mount', () => {
    render(<CompCode typed={[]} />);
    
    const compCode = screen.getByTestId('CompCode');

    expect(compCode).toBeInTheDocument();
  });
});