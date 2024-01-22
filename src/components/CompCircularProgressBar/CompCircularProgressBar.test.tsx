import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CompCircularProgressBar from './CompCircularProgressBar';

describe('<CompCircularProgressBar />', () => {
  test('it should mount', () => {
    render(<CompCircularProgressBar progress={0} variant={'circular'} />);
    
    const compCircularProgressBar = screen.getByTestId('CompCircularProgressBar');

    expect(compCircularProgressBar).toBeInTheDocument();
  });
});