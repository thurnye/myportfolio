import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CompNav from './CompNav';

describe('<CompNav />', () => {
  test('it should mount', () => {
    render(<CompNav width={0} onClose={() => 0}/>);
    
    const compNav = screen.getByTestId('CompNav');

    expect(compNav).toBeInTheDocument();
  });
});