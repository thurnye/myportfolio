import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CompGridLayout from './CompGridLayout';

describe('<CompGridLayout />', () => {
  test('it should mount', () => {
    render(<CompGridLayout num={0}/>);
    
    const compGridLayout = screen.getByTestId('CompGridLayout');

    expect(compGridLayout).toBeInTheDocument();
  });
});