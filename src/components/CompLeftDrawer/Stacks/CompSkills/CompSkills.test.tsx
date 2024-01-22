import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CompSkills from './CompSkills';

describe('<CompSkills />', () => {
  test('it should mount', () => {
    render(<CompSkills />);
    
    const compSkills = screen.getByTestId('CompSkills');

    expect(compSkills).toBeInTheDocument();
  });
});