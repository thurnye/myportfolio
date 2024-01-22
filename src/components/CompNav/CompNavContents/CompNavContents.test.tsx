import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CompNavContents from './CompNavContents';

describe('<CompNavContents />', () => {
  test('it should mount', () => {
    render(<CompNavContents />);
    
    const compNavContents = screen.getByTestId('CompNavContents');

    expect(compNavContents).toBeInTheDocument();
  });
});