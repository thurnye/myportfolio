import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CompExperience from './CompExperience';

describe('<CompExperience />', () => {
  test('it should mount', () => {
    render(<CompExperience />);
    
    const compExperience = screen.getByTestId('CompExperience');

    expect(compExperience).toBeInTheDocument();
  });
});