import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CompLanding from './CompLanding';

describe('<CompLanding />', () => {
  test('it should mount', () => {
    render(<CompLanding />);
    
    const compLanding = screen.getByTestId('CompLanding');

    expect(compLanding).toBeInTheDocument();
  });
});